import PlantsRepository from '@/modules/plants/domain/PlantsRepository'
import Plant from '@/modules/plants/domain/Plant'

export default class PlantsGetter {
  constructor(private plantsRepository: PlantsRepository) {}

  async run(): Promise<Plant[]> {
    return this.plantsRepository.getPlants()
  }
}
