<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->bigIncrements('id')->start_from(1000);
            $table->string('A_Name');
            $table->Integer('A_AddressId');
            $table->string('A_Email')->uniqid();
            $table->string('A_Pass');
            $table->string('A_Phone')->uniqid();
            $table->string('A_Photo');
            $table->string('A_otp')->nullable();
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('admins');
    }
};
