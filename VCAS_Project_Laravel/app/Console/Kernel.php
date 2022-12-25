<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () {
            
            $auctions=Auction::all(); 
           
            foreach($auctions as $auction){
                $time2=Carbon::parse(Carbon::now()->addHours(6));
                $time= Carbon::parse($auction->End_Time);
                  if($time2 >= $time){

                       $auction->Win_Status=1;
                       $auction->save();
                  }

                 
      
                
            
                 
            }
            
        })->everyMinute();   
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
