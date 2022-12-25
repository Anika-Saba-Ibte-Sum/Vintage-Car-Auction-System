<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory()->create([
            'U_Name'=> 'Anika Ibtesum',
            'U_AddressId'=> '1',
            'U_Email'=>'anikasaba15@gmail.com',
            'U_Pass'=> 'anika123',
            'U_Phn'=> 'Anika Saba',
            'U_Dob'=>'01/06/2000',
            'U_Gender'=>'Female',
            'U_Photo'=>'Anika2.jpj',
            'U_Photo'=> 'Anika1.jpg',
            'U_otp'=> '',
        ]);
    }
}
