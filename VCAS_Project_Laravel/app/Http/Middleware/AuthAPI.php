<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Token;
use Illuminate\Http\Request;

class AuthAPI
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $token = $request->header("Authorization");
        
        $token2 = json_decode($token);

        return $token2;
        $check_token = Token::where('tokenn',$token2->access_token)->where('expire_at',NULL)->first();
        if ($check_token) {
            return $next($request);

        }
        else return response("Invalid token",401);
    }
    }

