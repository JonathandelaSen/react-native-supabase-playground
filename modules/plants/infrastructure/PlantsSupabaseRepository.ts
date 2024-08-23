import supabase from '@/sections/shared/supabase/supabaseClient'
import Plant from '@/modules/plants/domain/Plant'
import PlantsRepository from '@/modules/plants/domain/PlantsRepository'

export default class PlantsSupabaseRepository implements PlantsRepository {
  async getPlants(): Promise<Plant[]> {
    const { data: plants, error } = await supabase.from('plants').select('*')
    if (error) {
      throw new Error(error.message)
    }
    return plants as Plant[]
  }

  async add(plant: Plant): Promise<void> {
    const { error } = await supabase.from('plants').insert(plant)
    if (error) {
      throw new Error(error.message)
    }
  }

  async delete(plantId: string): Promise<void> {
    const { error } = await supabase
      .from('plants')
      .delete()
      .match({ id: plantId })
    if (error) {
      throw new Error(error.message)
    }
  }
}
