create table bids (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  agency text,
  category text,
  value_min numeric(15,2),
  value_max numeric(15,2),
  deadline date not null,
  status text default 'researching',
  source_url text,
  description text,
  notes text,
  contact_name text,
  contact_email text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table bid_documents (
  id uuid primary key default gen_random_uuid(),
  bid_id uuid references bids(id) on delete cascade,
  name text not null,
  url text not null,
  created_at timestamptz default now()
);

create table demo_bids (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  agency text not null,
  category text not null,
  value_min numeric(15,2),
  value_max numeric(15,2),
  deadline date not null,
  description text,
  location text,
  naics_code text,
  created_at timestamptz default now()
);

create table subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  stripe_customer_id text,
  stripe_subscription_id text,
  plan text default 'free',
  status text default 'active',
  created_at timestamptz default now()
);
