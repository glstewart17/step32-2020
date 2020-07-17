// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.data;

import com.google.sps.QueryCovidStats;
import com.google.sps.data.DataPoint;
import com.opencsv.*;

import java.io.BufferedReader;
import java.io.FileReader; 
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/** Class contains the name, state, population and covid cases and deaths of a county. */
public class CountyStats extends County {

    protected long cases;
    protected long deaths;
    protected long activeCases;
    protected long population;

    public CountyStats(County county) {

        super(county.countyName, county.stateName, county.countyFips);

        applyCovidQuery(county);

        this.population = county.getPopulationFromCsv();
    }

    void applyCovidQuery(County county) {
        // Make query for active covid cases and deaths.
        QueryCovidStats queryResults = QueryCovidStats.getCovidStatsFips(county.getCountyFips());
        this.cases = queryResults.getCases();
        this.deaths = queryResults.getDeaths();
        this.activeCases = queryResults.getActiveCases();
    }

    public long getCases() {
        return cases;
    }

    public long getDeaths() {
        return deaths;
    }

    public long getActiveCases() {
        return activeCases;
    }
    
    public long getPopulation() {
        return population;
    }
}
