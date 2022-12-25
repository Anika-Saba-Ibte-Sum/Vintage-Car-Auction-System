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
        Schema::create('auctions', function (Blueprint $table) {
            $table->bigIncrements('id')->start_from(6000);
            $table->Integer('S_Id');
            $table->Integer('Bid_Id')->nullable();
            $table->Integer('Customer_Id')->nullable();
            $table->Integer('Payment_Id')->nullable();
            $table->Integer('P_Id');          
            $table->double('Start_Amount');
            $table->double('Final_Amount')->nullable();
            $table->string('Start_Time');
            $table->string('End_Time');
            $table->Integer('Win_Status')->default('0');
            $table->string('Picture')->nullable();
            $table->Integer('Catagory_Id');
            $table->Integer('RegD_Id');

            $table->string('S_BankName');
            $table->Integer('S_AccountNo');
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
        Schema::dropIfExists('auctions');
    }
};
