import Plant from '@/modules/plants/domain/Plant'

export default interface PlantsRepository {
  getPlants(): Promise<Plant[]>
  add(plant: Plant): Promise<void>
  delete(plantId: string): Promise<void>
}
