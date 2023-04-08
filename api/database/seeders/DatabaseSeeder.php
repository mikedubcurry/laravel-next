<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'Michael',
            'email' => 'michael.curry@troyweb.com',
            'password' => bcrypt('password'),
        ]);

        \App\Models\Address::factory(10)->create();
        \App\Models\Survey::factory(10)->create();
        \App\Models\Inventory::factory(10)->create();
        \App\Models\InventoryItem::factory(100)->create();
    }
}
