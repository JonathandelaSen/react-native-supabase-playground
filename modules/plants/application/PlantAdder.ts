import PlantsRepository from '@/modules/plants/domain/PlantsRepository'
import Plant from '@/modules/plants/domain/Plant'

export default class PlantAdder {
  constructor(private plantsRepository: PlantsRepository) {}

  async run(plant: Plant) {
    await this.plantsRepository.add(plant)
  }
}
