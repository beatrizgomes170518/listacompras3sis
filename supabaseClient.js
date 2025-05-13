// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://wsbjkdyzwxyxbnepzzjk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzYmprZHl6d3h5eGJuZXB6emprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU1NjgsImV4cCI6MjA2MjExMTU2OH0.RznHPwAgXnkr1yWnNvbsaoVq_1X_LebWr_2Pf5Ua56s')
