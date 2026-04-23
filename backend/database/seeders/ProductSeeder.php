<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $products = [
            ['name' => 'Espresso', 'price' => 25000, 'image_url' => '/src/assets/images/CATALOG KOPI/esspreso - pinteres.jpg'],
            ['name' => 'Americano', 'price' => 22000, 'image_url' => '/src/assets/images/CATALOG KOPI/americano - pinteres.jpg'],
            ['name' => 'Latte Hot Art', 'price' => 30000, 'image_url' => '/src/assets/images/CATALOG KOPI/cafe latte hot art.png'],
            ['name' => 'Kopi Susu', 'price' => 28000, 'image_url' => '/src/assets/images/CATALOG KOPI/kopi susu - pinteres.jpg'],
            ['name' => 'V60', 'price' => 35000, 'image_url' => '/src/assets/images/CATALOG KOPI/v60 - pinteres.jpg'],
            ['name' => 'Vietnam Drip', 'price' => 27000, 'image_url' => '/src/assets/images/CATALOG KOPI/Vietnam drip - pinteres.jpg'],
            ['name' => 'Cafe Latte Ice', 'price' => 30000, 'image_url' => '/src/assets/images/CATALOG KOPI/cafe latte ice.png'],
            ['name' => 'Mochaccino', 'price' => 32000, 'image_url' => '/src/assets/images/CATALOG KOPI/Mochaccino.png'],
            ['name' => 'Caramel Macchiato', 'price' => 33000, 'image_url' => '/src/assets/images/CATALOG KOPI/Caramel Macchiato - pinteres.jpg'],
            ['name' => 'Matcha Latte', 'price' => 29000, 'image_url' => '/src/assets/images/CATALOG KOPI/matcha - pinteres.jpg'],
            ['name' => 'Croissant', 'price' => 18000, 'image_url' => '/src/assets/images/CATALOG MAKANAN/Croissant - pinteres.jpg'],
            ['name' => 'Cookies', 'price' => 15000, 'image_url' => '/src/assets/images/CATALOG MAKANAN/Cookies - pinteres.jpg'],
            ['name' => 'French Fries', 'price' => 16000, 'image_url' => '/src/assets/images/CATALOG MAKANAN/frien french - pinteres.jpg'],
            ['name' => 'Mix Platter', 'price' => 45000, 'image_url' => '/src/assets/images/CATALOG MAKANAN/Mix Platter -  pinteres.jpg'],
            ['name' => 'Brownies dan Ice Cream', 'price' => 12000, 'image_url' => '/src/assets/images/CATALOG MAKANAN/brownis and ice cream - pinteres.jpg'],
            ['name' => 'Sandwich', 'price' => 30000, 'image_url' => '/src/assets/images/CATALOG MAKANAN/sandwich - pinteres.jpg'],
            ['name' => 'Salad', 'price' => 22000, 'image_url' => '/src/assets/images/CATALOG MAKANAN/salad - pinteres.jpg'],
            ['name' => 'Risol', 'price' => 28000, 'image_url' => '/src/assets/images/CATALOG MAKANAN/risol - pinteres.jpg'],
        ];

        foreach ($products as $product) {
            Product::updateOrCreate(
                ['name' => $product['name']],
                [
                    'description' => null,
                    'price' => $product['price'],
                    'image_url' => $product['image_url'],
                    'is_active' => true,
                ]
            );
        }
    }
}
