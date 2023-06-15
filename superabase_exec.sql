CREATE TABLE students (
  id bigint generated by default as identity primary key,
  name text,
  score float,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
alter table students enable row level security;

create policy "student are public." on students for
    select using (true);

create policy "Individuals can create students." on students for
    insert with check (true);

create policy "Individuals can update their own students." on students for
    update using (true);

create policy "Individuals can delete their own students." on students for
    delete using (true);
