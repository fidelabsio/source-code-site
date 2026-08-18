-- Required for gen_random_bytes() on Postgres < 16
create extension if not exists pgcrypto;

-- CreateEnum
create type "license_status" as enum ('ACTIVE', 'REVOKED', 'EXPIRED');

-- CreateTable
create table "licenses" (
    "id" text not null,
    "license_key" text not null,
    "status" "license_status" not null default 'ACTIVE',
    "is_renewal" boolean not null default false,
    "expires_at" timestamp(3),

    "order_id" bigint not null,
    "order_gid" text not null,
    "order_name" text not null,
    "total_price" text,
    "currency" text,

    "customer_id" bigint,
    "customer_email" text not null,
    "customer_first_name" text,
    "customer_last_name" text,
    "customer_phone" text,

    "created_at" timestamp(3) not null default current_timestamp,
    "updated_at" timestamp(3) not null,

    constraint "licenses_pkey" primary key ("id")
);

-- CreateIndex
create unique index "licenses_license_key_key" on "licenses"("license_key");
create unique index "licenses_order_id_key" on "licenses"("order_id");
create unique index "licenses_order_gid_key" on "licenses"("order_gid");

-- Generates the customer-facing license key (e.g. FIDE-A1B2-C3D4-E5F6-7890) at
-- insert time, retrying on the (astronomically unlikely) chance of a collision.
create or replace function generate_license_key()
returns text
language plpgsql
as $$
declare
  candidate text;
  collision boolean;
begin
  loop
    select 'FIDE-' || upper(encode(gen_random_bytes(2), 'hex')) || '-' ||
                       upper(encode(gen_random_bytes(2), 'hex')) || '-' ||
                       upper(encode(gen_random_bytes(2), 'hex')) || '-' ||
                       upper(encode(gen_random_bytes(2), 'hex'))
      into candidate;

    select exists(select 1 from "licenses" where "license_key" = candidate) into collision;
    exit when not collision;
  end loop;

  return candidate;
end;
$$;

-- Wire the default into the column now that the function exists.
alter table "licenses" alter column "license_key" set default generate_license_key();
