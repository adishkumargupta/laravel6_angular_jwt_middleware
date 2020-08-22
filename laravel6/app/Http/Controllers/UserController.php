<?php

namespace App\Http\Controllers;


use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Http\Requests\SignUpRequest;

class UserController extends Controller
{
    //construct

    public function __construct()
    {
        $this->middleware('auth:api',['except'=>['login','signup']]);

    }

    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Please enter Email or password incorrect'], 401);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function profile()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()

        ]);
    }


    //SignUp

    public function signup(SignUpRequest $request)
    {
$user = new User;
$user->name = $request->input('name');
$user->email = $request->input('email');
$user->password = $request->input('password');
$user->save();
    //    $user = User::create([
    //        'name' => $request->input('name'),
    //        'email' => $request->input('email'),
    //        'password' => $request->input('password')

    //        ]);

        return  $this->login($request);

    }
}
