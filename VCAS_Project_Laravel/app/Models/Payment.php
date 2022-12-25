<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;
    public function auction(){
        return $this->belongsTo(Auction::class, 'Auction_Id','id');
    }
}
