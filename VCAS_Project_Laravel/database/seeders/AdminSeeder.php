<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Admin::factory()->create([

            'A_Name'=> 'Anika Saba',
            'A_AddressId'=> '1',
            'A_Email'=>'anikasaba15@gmail.com',
            'A_Pass'=> 'anika123',
            'A_Phone'=> 'Anika Saba',
            'A_Photo'=> 'Anika1.jpg',
            'A_otp'=> '',
            
        
        ]);
    }
}
