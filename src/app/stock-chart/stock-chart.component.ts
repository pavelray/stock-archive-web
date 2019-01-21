import { Component, OnInit } from '@angular/core';

const data = {
  "chart": {
    "caption": "Ethereum (ETH) Price",
    "subcaption": "Q4-2017",
    "numberprefix": "$",
    "pyaxisname": "Price (USD)",
    "theme": "fusion",
    "plotpriceas": "LINE",
    "plotlinethickness": "2.3",
    "showvolumechart": "1",
    "vnumberprefix": "$",
    "vyaxisname": "Volume traded"
  },
  "categories": [
    {
      "category": [
        {
          "label": "Oct",
          "x": "1"
        },
        {
          "label": "Nov",
          "x": "32"
        },
        {
          "label": "Dec",
          "x": "62"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "tooltext": "<b>Oct 01, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 301.55,
          "high": 303.19,
          "low": 295.06,
          "close": 302.34,
          "volume": "306185000",
          "x": 1
        },
        {
          "tooltext": "<b>Oct 02, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 302.48,
          "high": 302.92,
          "low": 294.58,
          "close": 297.48,
          "volume": "339443000",
          "x": 2
        },
        {
          "tooltext": "<b>Oct 03, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 297.48,
          "high": 300.11,
          "low": 288.13,
          "close": 292.46,
          "volume": "321680000",
          "x": 3
        },
        {
          "tooltext": "<b>Oct 04, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 292.75,
          "high": 299.39,
          "low": 290.9,
          "close": 292.66,
          "volume": "257906000",
          "x": 4
        },
        {
          "tooltext": "<b>Oct 05, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 292.77,
          "high": 298.04,
          "low": 288.84,
          "close": 295.86,
          "volume": "253747000",
          "x": 5
        },
        {
          "tooltext": "<b>Oct 06, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 295.16,
          "high": 308.84,
          "low": 294.95,
          "close": 308.59,
          "volume": "318664000",
          "x": 6
        },
        {
          "tooltext": "<b>Oct 07, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 308.89,
          "high": 313.13,
          "low": 304.98,
          "close": 311.12,
          "volume": "342205000",
          "x": 7
        },
        {
          "tooltext": "<b>Oct 08, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 311.06,
          "high": 312.54,
          "low": 308.03,
          "close": 308.61,
          "volume": "293167000",
          "x": 8
        },
        {
          "tooltext": "<b>Oct 09, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 308.67,
          "high": 309.31,
          "low": 288.19,
          "close": 297.39,
          "volume": "559467000",
          "x": 9
        },
        {
          "tooltext": "<b>Oct 10, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 297.6,
          "high": 306.15,
          "low": 293.17,
          "close": 299.87,
          "volume": "359706000",
          "x": 10
        },
        {
          "tooltext": "<b>Oct 11, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 301.18,
          "high": 304.39,
          "low": 299.1,
          "close": 303.46,
          "volume": "264146000",
          "x": 11
        },
        {
          "tooltext": "<b>Oct 12, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 303.5,
          "high": 309.15,
          "low": 303.29,
          "close": 304.14,
          "volume": "527557000",
          "x": 12
        },
        {
          "tooltext": "<b>Oct 13, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 304.08,
          "high": 348.6,
          "low": 299.66,
          "close": 338.76,
          "volume": "1304360000",
          "x": 13
        },
        {
          "tooltext": "<b>Oct 14, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 338.85,
          "high": 347.98,
          "low": 334.7,
          "close": 339.63,
          "volume": "516562000",
          "x": 14
        },
        {
          "tooltext": "<b>Oct 15, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 339.53,
          "high": 342.72,
          "low": 320.43,
          "close": 336.6,
          "volume": "635407000",
          "x": 15
        },
        {
          "tooltext": "<b>Oct 16, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 336.71,
          "high": 349.35,
          "low": 332.04,
          "close": 333.38,
          "volume": "692885000",
          "x": 16
        },
        {
          "tooltext": "<b>Oct 17, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 333.48,
          "high": 333.48,
          "low": 311.79,
          "close": 317.08,
          "volume": "509924000",
          "x": 17
        },
        {
          "tooltext": "<b>Oct 18, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 316.94,
          "high": 317.24,
          "low": 290.64,
          "close": 314.32,
          "volume": "606114000",
          "x": 18
        },
        {
          "tooltext": "<b>Oct 19, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 314.54,
          "high": 316.71,
          "low": 305.83,
          "close": 308.09,
          "volume": "349830000",
          "x": 19
        },
        {
          "tooltext": "<b>Oct 20, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 308.05,
          "high": 311.44,
          "low": 303.49,
          "close": 304.01,
          "volume": "396673000",
          "x": 20
        },
        {
          "tooltext": "<b>Oct 21, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 303.57,
          "high": 303.93,
          "low": 291.77,
          "close": 300.19,
          "volume": "408014000",
          "x": 21
        },
        {
          "tooltext": "<b>Oct 22, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 300.55,
          "high": 305.5,
          "low": 292.81,
          "close": 295.45,
          "volume": "327387000",
          "x": 22
        },
        {
          "tooltext": "<b>Oct 23, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 295.1,
          "high": 295.75,
          "low": 277.58,
          "close": 286.95,
          "volume": "482336000",
          "x": 23
        },
        {
          "tooltext": "<b>Oct 24, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 287.12,
          "high": 311.96,
          "low": 282.66,
          "close": 298.33,
          "volume": "684281000",
          "x": 24
        },
        {
          "tooltext": "<b>Oct 25, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 298.44,
          "high": 301.85,
          "low": 290.72,
          "close": 297.93,
          "volume": "325040000",
          "x": 25
        },
        {
          "tooltext": "<b>Oct 26, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 298.02,
          "high": 301.07,
          "low": 295.22,
          "close": 296.53,
          "volume": "270273000",
          "x": 26
        },
        {
          "tooltext": "<b>Oct 27, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 296.51,
          "high": 299.26,
          "low": 294.06,
          "close": 297.42,
          "volume": "257169000",
          "x": 27
        },
        {
          "tooltext": "<b>Oct 28, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 297.92,
          "high": 300.36,
          "low": 293.59,
          "close": 296.3,
          "volume": "264424000",
          "x": 28
        },
        {
          "tooltext": "<b>Oct 29, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 296.38,
          "high": 313.76,
          "low": 296.38,
          "close": 305.09,
          "volume": "551752000",
          "x": 29
        },
        {
          "tooltext": "<b>Oct 30, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 304.78,
          "high": 310.5,
          "low": 304.35,
          "close": 307.75,
          "volume": "331442000",
          "x": 30
        },
        {
          "tooltext": "<b>Oct 31, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 307.38,
          "high": 310.55,
          "low": 305.88,
          "close": 305.88,
          "volume": "369583000",
          "x": 31
        },
        {
          "tooltext": "<b>Nov 01, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 305.76,
          "high": 306.4,
          "low": 290.58,
          "close": 291.69,
          "volume": "553864000",
          "x": 32
        },
        {
          "tooltext": "<b>Nov 02, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 290.73,
          "high": 293.91,
          "low": 281.17,
          "close": 287.43,
          "volume": "904901000",
          "x": 33
        },
        {
          "tooltext": "<b>Nov 03, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 288.5,
          "high": 308.31,
          "low": 287.69,
          "close": 305.71,
          "volume": "646340000",
          "x": 34
        },
        {
          "tooltext": "<b>Nov 04, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 305.48,
          "high": 305.48,
          "low": 295.8,
          "close": 300.47,
          "volume": "416479000",
          "x": 35
        },
        {
          "tooltext": "<b>Nov 05, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 300.04,
          "high": 301.37,
          "low": 295.12,
          "close": 296.26,
          "volume": "337658000",
          "x": 36
        },
        {
          "tooltext": "<b>Nov 06, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 296.43,
          "high": 305.42,
          "low": 293.72,
          "close": 298.89,
          "volume": "579359000",
          "x": 37
        },
        {
          "tooltext": "<b>Nov 07, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 298.57,
          "high": 304.84,
          "low": 290.77,
          "close": 294.66,
          "volume": "540766000",
          "x": 38
        },
        {
          "tooltext": "<b>Nov 08, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 294.27,
          "high": 318.7,
          "low": 293.1,
          "close": 309.07,
          "volume": "967956000",
          "x": 39
        },
        {
          "tooltext": "<b>Nov 09, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 308.65,
          "high": 329.45,
          "low": 307.06,
          "close": 320.88,
          "volume": "893250000",
          "x": 40
        },
        {
          "tooltext": "<b>Nov 10, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 320.67,
          "high": 324.72,
          "low": 294.54,
          "close": 299.25,
          "volume": "885986000",
          "x": 41
        },
        {
          "tooltext": "<b>Nov 11, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 298.59,
          "high": 319.45,
          "low": 298.19,
          "close": 314.68,
          "volume": "842301000",
          "x": 42
        },
        {
          "tooltext": "<b>Nov 12, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 314.69,
          "high": 319.15,
          "low": 298.51,
          "close": 307.91,
          "volume": "1613480000",
          "x": 43
        },
        {
          "tooltext": "<b>Nov 13, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 307.03,
          "high": 328.42,
          "low": 307.03,
          "close": 316.72,
          "volume": "1041890000",
          "x": 44
        },
        {
          "tooltext": "<b>Nov 14, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 316.76,
          "high": 340.18,
          "low": 316.76,
          "close": 337.63,
          "volume": "1069680000",
          "x": 45
        },
        {
          "tooltext": "<b>Nov 15, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 337.96,
          "high": 340.91,
          "low": 329.81,
          "close": 333.36,
          "volume": "722666000",
          "x": 46
        },
        {
          "tooltext": "<b>Nov 16, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 333.44,
          "high": 336.16,
          "low": 323.61,
          "close": 330.92,
          "volume": "797254000",
          "x": 47
        },
        {
          "tooltext": "<b>Nov 17, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 330.17,
          "high": 334.96,
          "low": 327.52,
          "close": 332.39,
          "volume": "621733000",
          "x": 48
        },
        {
          "tooltext": "<b>Nov 18, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 331.98,
          "high": 349.62,
          "low": 327.69,
          "close": 347.61,
          "volume": "649639000",
          "x": 49
        },
        {
          "tooltext": "<b>Nov 19, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 347.4,
          "high": 371.29,
          "low": 344.74,
          "close": 354.39,
          "volume": "1181530000",
          "x": 50
        },
        {
          "tooltext": "<b>Nov 20, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 354.09,
          "high": 372.14,
          "low": 353.29,
          "close": 366.73,
          "volume": "807027000",
          "x": 51
        },
        {
          "tooltext": "<b>Nov 21, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 367.44,
          "high": 372.47,
          "low": 350.69,
          "close": 360.4,
          "volume": "949912000",
          "x": 52
        },
        {
          "tooltext": "<b>Nov 22, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 360.31,
          "high": 381.42,
          "low": 360.15,
          "close": 380.65,
          "volume": "800819000",
          "x": 53
        },
        {
          "tooltext": "<b>Nov 23, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 381.44,
          "high": 425.55,
          "low": 376.09,
          "close": 410.17,
          "volume": "1845680000",
          "x": 54
        },
        {
          "tooltext": "<b>Nov 24, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 412.5,
          "high": 480.97,
          "low": 402.76,
          "close": 474.91,
          "volume": "2292830000",
          "x": 55
        },
        {
          "tooltext": "<b>Nov 25, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 475.68,
          "high": 485.19,
          "low": 461.05,
          "close": 466.28,
          "volume": "1422080000",
          "x": 56
        },
        {
          "tooltext": "<b>Nov 26, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 465.97,
          "high": 472.72,
          "low": 451.61,
          "close": 471.33,
          "volume": "1197780000",
          "x": 57
        },
        {
          "tooltext": "<b>Nov 27, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 471.53,
          "high": 493.41,
          "low": 468.49,
          "close": 480.36,
          "volume": "1396480000",
          "x": 58
        },
        {
          "tooltext": "<b>Nov 28, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 480.52,
          "high": 482.48,
          "low": 466.35,
          "close": 472.9,
          "volume": "1346500000",
          "x": 59
        },
        {
          "tooltext": "<b>Nov 29, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 473.28,
          "high": 522.31,
          "low": 425.07,
          "close": 427.52,
          "volume": "2675940000",
          "x": 60
        },
        {
          "tooltext": "<b>Nov 30, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 431.22,
          "high": 465.5,
          "low": 401.24,
          "close": 447.11,
          "volume": "1903040000",
          "x": 61
        },
        {
          "tooltext": "<b>Dec 01, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 445.21,
          "high": 472.61,
          "low": 428.31,
          "close": 466.54,
          "volume": "1247880000",
          "x": 62
        },
        {
          "tooltext": "<b>Dec 02, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 466.85,
          "high": 476.24,
          "low": 456.65,
          "close": 463.45,
          "volume": "943650000",
          "x": 63
        },
        {
          "tooltext": "<b>Dec 03, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 463.71,
          "high": 482.81,
          "low": 451.85,
          "close": 465.85,
          "volume": "990557000",
          "x": 64
        },
        {
          "tooltext": "<b>Dec 04, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 466.05,
          "high": 474.78,
          "low": 453.31,
          "close": 470.2,
          "volume": "1005550000",
          "x": 65
        },
        {
          "tooltext": "<b>Dec 05, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 470.29,
          "high": 473.56,
          "low": 457.66,
          "close": 463.28,
          "volume": "1216720000",
          "x": 66
        },
        {
          "tooltext": "<b>Dec 06, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 462.6,
          "high": 462.71,
          "low": 420.21,
          "close": 428.59,
          "volume": "1998260000",
          "x": 67
        },
        {
          "tooltext": "<b>Dec 07, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 426.37,
          "high": 441.4,
          "low": 414.41,
          "close": 434.41,
          "volume": "2129570000",
          "x": 68
        },
        {
          "tooltext": "<b>Dec 08, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 434.99,
          "high": 466.06,
          "low": 422.37,
          "close": 456.03,
          "volume": "2336380000",
          "x": 69
        },
        {
          "tooltext": "<b>Dec 09, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 457.34,
          "high": 504.15,
          "low": 456.25,
          "close": 473.5,
          "volume": "2003850000",
          "x": 70
        },
        {
          "tooltext": "<b>Dec 10, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 472.79,
          "high": 472.79,
          "low": 429.51,
          "close": 441.72,
          "volume": "1404180000",
          "x": 71
        },
        {
          "tooltext": "<b>Dec 11, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 440.36,
          "high": 516.97,
          "low": 439.1,
          "close": 515.14,
          "volume": "1771440000",
          "x": 72
        },
        {
          "tooltext": "<b>Dec 12, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 522.29,
          "high": 657.32,
          "low": 504.49,
          "close": 651.43,
          "volume": "5179830000",
          "x": 73
        },
        {
          "tooltext": "<b>Dec 13, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 644.91,
          "high": 747.99,
          "low": 597.8,
          "close": 702.77,
          "volume": "4524540000",
          "x": 74
        },
        {
          "tooltext": "<b>Dec 14, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 700.59,
          "high": 753.12,
          "low": 664.99,
          "close": 695.82,
          "volume": "3821580000",
          "x": 75
        },
        {
          "tooltext": "<b>Dec 15, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 696.38,
          "high": 697.13,
          "low": 621.06,
          "close": 684.45,
          "volume": "2758710000",
          "x": 76
        },
        {
          "tooltext": "<b>Dec 16, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 686.19,
          "high": 718.39,
          "low": 680.79,
          "close": 696.21,
          "volume": "2165690000",
          "x": 77
        },
        {
          "tooltext": "<b>Dec 17, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 696.24,
          "high": 735.83,
          "low": 696.24,
          "close": 719.98,
          "volume": "2147390000",
          "x": 78
        },
        {
          "tooltext": "<b>Dec 18, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 721.73,
          "high": 803.93,
          "low": 689.23,
          "close": 794.65,
          "volume": "3249230000",
          "x": 79
        },
        {
          "tooltext": "<b>Dec 19, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 793.9,
          "high": 881.94,
          "low": 785.34,
          "close": 826.82,
          "volume": "4096550000",
          "x": 80
        },
        {
          "tooltext": "<b>Dec 20, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 827.52,
          "high": 845.06,
          "low": 756,
          "close": 819.09,
          "volume": "3969940000",
          "x": 81
        },
        {
          "tooltext": "<b>Dec 21, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 820.24,
          "high": 880.54,
          "low": 792.69,
          "close": 821.06,
          "volume": "3569060000",
          "x": 82
        },
        {
          "tooltext": "<b>Dec 22, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 822.64,
          "high": 827.68,
          "low": 543.76,
          "close": 674.86,
          "volume": "4977710000",
          "x": 83
        },
        {
          "tooltext": "<b>Dec 23, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 681.32,
          "high": 763.9,
          "low": 679.73,
          "close": 719.39,
          "volume": "2480340000",
          "x": 84
        },
        {
          "tooltext": "<b>Dec 24, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 721.77,
          "high": 721.77,
          "low": 614.92,
          "close": 694.15,
          "volume": "2300550000",
          "x": 85
        },
        {
          "tooltext": "<b>Dec 25, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 698.87,
          "high": 782.52,
          "low": 698.87,
          "close": 765.83,
          "volume": "2491760000",
          "x": 86
        },
        {
          "tooltext": "<b>Dec 26, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 763.37,
          "high": 786.79,
          "low": 760.94,
          "close": 773.84,
          "volume": "2201160000",
          "x": 87
        },
        {
          "tooltext": "<b>Dec 27, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 774.97,
          "high": 789.25,
          "low": 738.41,
          "close": 762.84,
          "volume": "2100030000",
          "x": 88
        },
        {
          "tooltext": "<b>Dec 28, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 762.21,
          "high": 763.32,
          "low": 701.19,
          "close": 737.02,
          "volume": "2389150000",
          "x": 89
        },
        {
          "tooltext": "<b>Dec 29, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 740.39,
          "high": 770.12,
          "low": 729.61,
          "close": 753.59,
          "volume": "2648970000",
          "x": 90
        },
        {
          "tooltext": "<b>Dec 30, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 753.82,
          "high": 753.82,
          "low": 685.23,
          "close": 717.26,
          "volume": "3187780000",
          "x": 91
        },
        {
          "tooltext": "<b>Dec 31, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 712.21,
          "high": 760.35,
          "low": 710.12,
          "close": 756.73,
          "volume": "2554270000",
          "x": 92
        }
      ]
    }
  ]
};

@Component({
  selector: 'stock-chart',
  templateUrl: './stock-chart.component.html',
  styleUrls: ['./stock-chart.component.css']
})
export class StockChartComponent implements OnInit {
  width = 600;
  height = 400;
  type = 'candlestick';
  dataFormat = 'json';
  dataSource = data;
  constructor() { }

  ngOnInit() {
    console.log(data);
  }
}
