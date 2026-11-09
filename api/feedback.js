import { neon } from '@neondatabase/serverless';
export default async function handler(req,res){
  const sql=neon(process.env.DATABASE_URL);
  await sql`CREATE TABLE IF NOT EXISTS feedback(id serial primary key, nama text, masukan text, created_at timestamptz default now())`;
  const rows=await sql`SELECT * FROM feedback ORDER BY id DESC`;
  res.status(200).json({ok:true,data:rows});
}
