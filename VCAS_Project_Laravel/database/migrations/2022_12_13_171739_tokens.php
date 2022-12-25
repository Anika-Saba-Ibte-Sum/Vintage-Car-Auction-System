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
        //
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::create('tokens', function (Blueprint $table) {
            $table->bigIncrements('id')->start_from(200);
            $table->string('tokenn', 64)->uniqueid();
            $table->Integer('U_Id');
            $table->dateTime('create_at')->nullable();
            $table->dateTime('expire_at')->nullable();
            $table->string('Type');

            
        });
    }
};
