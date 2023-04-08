<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Survey;

class SurveyController extends Controller
{
    /**
     * list all surveys
     *
     */
    public function index()
    {
        // surveys belonging to user
        $surveys = Survey::where('surveyor_id', auth()->id())->get();
        // return json response
        return response()->json($surveys);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // validate Request
        $request->validate([
            'customer_name' => 'required',
            'customer_email' => 'required|email',
            'customer_phone' => 'required',
            'address_id' => 'required',
        ]);
        // create new survey
        $survey = Survey::create([
            'customer_name' => $request->customer_name,
            'customer_email' => $request->customer_email,
            'customer_phone' => $request->customer_phone,
            'address_id' => $request->address_id,
            'surveyor_id' => auth()->id(),
        ]);

        // return json response
        return response()->json($survey);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // find survey
        $survey = Survey::find($id);
        // return json response
        return response()->json($survey);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // validate request
        $request->validate([
            'customer_name' => 'required',
            'customer_email' => 'required|email',
            'customer_phone' => 'required',
            'address_id' => 'required',
        ]);
        // find survey
        $survey = Survey::find($id);
        // update survey
        $survey->update([
            'customer_name' => $request->customer_name,
            'customer_email' => $request->customer_email,
            'customer_phone' => $request->customer_phone,
            'address_id' => $request->address_id,
        ]);
        // return json response
        return response()->json($survey);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // find survey
        $survey = Survey::find($id);
        // delete survey
        $survey->delete();
        // return json response
        return response()->json($survey);
    }


    public function upgrade(string $id)
    {
        // find survey
        $survey = Survey::find($id);
        // upgrade survey if user is surveyor_id
        if ($survey->surveyor_id === auth()->id()) {
            $survey->upgrade();
            return response()->json($survey);
        }
        // return failed json response
        return response()->json([
            'message' => 'You are not authorized to upgrade this survey',
        ], 403);
    }

    public function finalize(string $id)
    {
        // find survey
        $survey = Survey::find($id);
        // finalize survey if user is surveyor_id
        if ($survey->surveyor_id === auth()->id()) {
            $survey->finalize();
            return response()->json($survey);
        }
        // return failed json response
        return response()->json([
            'message' => 'You are not authorized to finalize this survey',
        ], 403);
    }
}
