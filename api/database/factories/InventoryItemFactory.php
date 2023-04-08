<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\InventoryItem>
 */
class InventoryItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word,
            'description' => $this->faker->sentence,
            'estimated_weight' => $this->faker->randomFloat(2, 0, 100),
            'not_moving' => $this->faker->boolean,
            'inventory_id' => $this->faker->numberBetween(1, 10),
        ];
    }
}
