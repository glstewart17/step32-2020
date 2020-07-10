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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.google.sps.data.DataPoint;

/** Class containing the stats for a store and its county statistics. */
public final class StoreResult {

    private final StoreStats store;
    private final CountyStats countyStats;
    private final ArrayList<DataPoint> maskData;
    private final ArrayList<DataPoint> busyData;
    private final ArrayList<DataPoint> lineData;
    private final ArrayList<DataPoint> hygieneData;
    private final ArrayList<DataPoint> casesData;

    public StoreResult(StoreStats store, CountyStats countyStats, 
        HashMap<String, ArrayList<DataPoint>> compiledRatings, ArrayList<DataPoint> covidData) {
        this.store = store;
        this.countyStats = countyStats;
        
        //Populate variables from compiled data
        this.maskData = compiledRatings.get("mask");
        this.busyData = compiledRatings.get("busy");
        this.lineData = compiledRatings.get("line");
        this.hygieneData = compiledRatings.get("hygiene");

        this.casesData = covidData;
    }
}