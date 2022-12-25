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
        Schema::create('car_reg_details', function (Blueprint $table) {
            $table->bigIncrements('id')->start_from(8000);
            $table->string('Reg_Num')->uniqid();
            $table->string('Original_Purchase_Invoice_Photo');
            $table->string('Insurance_Photo');
            $table->string('Road_Tax_Recipt_Certificate');
            $table->string('Pullotion_Certificate');
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
        Schema::dropIfExists('car_reg_details');
    }
};
