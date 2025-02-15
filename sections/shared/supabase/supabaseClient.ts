import { createClient } from '@supabase/supabase-js'
import { type Database } from './types/database.types'

const supabase = createClient<Database>(
  process.env.EXPO_PUBLIC_SUPABASE_PROJECT_URL!,
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!,
)

export default supabase
