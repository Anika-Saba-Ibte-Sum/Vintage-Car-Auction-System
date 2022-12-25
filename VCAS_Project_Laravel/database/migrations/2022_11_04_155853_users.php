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
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id')->start_from(3000);

            $table->string('U_Name');

            $table->Integer('U_AddressId');

            $table->Integer('Status');

            $table->string('U_Email')->uniqid();

            $table->string('U_Pass');

            $table->string('U_Phn',11)->uniqid();

            $table->string('U_Dob');

            $table->string('U_Gender');

            $table->string('U_Photo');
            $table->string('U_otp')->nullable();

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
        Schema::dropIfExists('users');
    }
};
