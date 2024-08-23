import PlantsRepository from '@/modules/plants/domain/PlantsRepository'

export default class PlantAdder {
  constructor(private plantsRepository: PlantsRepository) {}

  async run(plantId: string) {
    await this.plantsRepository.delete(plantId)
  }
}
