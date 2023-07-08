const axios = require('axios')
const express = require('express')
const fs = require('fs');
const router = express.Router()
const { Disease } = require('../models')

router.get('/getDiseases', async (req, res) => {
  try {
    const diseases = await Disease.findAll();
    res.json(diseases);
  }
  catch (error) {
    console.log("The error", error)
  }
});

router.post('/populate', async (req, res) => {
  try {
    const data = [
      {
        "country": "USA",
        "diseases": [
          {
            "disease": "Malaria",
            "vaccine": "RTS,S/AS01 (Mosquirix)",
            "cases": 17878
          },
          {
            "disease": "Influenza",
            "vaccine": "Flu vaccine",
            "cases": 366542
          },
          {
            "disease": "COVID-19",
            "vaccine": "Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Covaxin, Sinovac, Sputnik V",
            "cases": 165240
          },
          {
            "disease": "Cancer",
            "vaccine": "HPV vaccine, Hepatitis B vaccine",
            "cases": 878405
          },
          {
            "disease": "Diabetes",
            "vaccine": "No vaccine",
            "cases": 263312
          },
          {
            "disease": "Alzheimer",
            "vaccine": "No vaccine",
            "cases": 644049
          },
          {
            "disease": "HIV/AIDS",
            "vaccine": "No vaccine",
            "cases": 861964
          },
          {
            "disease": "Heart Disease",
            "vaccine": "No vaccine",
            "cases": 199668
          },
          {
            "disease": "Stroke",
            "vaccine": "No vaccine",
            "cases": 57771
          },
          {
            "disease": "Hepatitis B",
            "vaccine": "Hepatitis B vaccine",
            "cases": 939333
          },
          {
            "disease": "Hepatitis C",
            "vaccine": "No vaccine",
            "cases": 887210
          },
          {
            "disease": "Pneumonia",
            "vaccine": "Pneumococcal vaccines",
            "cases": 928272
          },
          {
            "disease": "Tuberculosis",
            "vaccine": "BCG vaccine",
            "cases": 434511
          },
          {
            "disease": "Dengue",
            "vaccine": "Dengvaxia",
            "cases": 867630
          },
          {
            "disease": "Typhoid",
            "vaccine": "Typhoid vaccines",
            "cases": 911615
          }
        ]
      },
      {
        "country": "Canada",
        "diseases": [
          {
            "disease": "Malaria",
            "vaccine": "RTS,S/AS01 (Mosquirix)",
            "cases": 454000
          },
          {
            "disease": "Influenza",
            "vaccine": "Flu vaccine",
            "cases": 301611
          },
          {
            "disease": "COVID-19",
            "vaccine": "Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Covaxin, Sinovac, Sputnik V",
            "cases": 748916
          },
          {
            "disease": "Cancer",
            "vaccine": "HPV vaccine, Hepatitis B vaccine",
            "cases": 217455
          },
          {
            "disease": "Diabetes",
            "vaccine": "No vaccine",
            "cases": 963859
          },
          {
            "disease": "Alzheimer",
            "vaccine": "No vaccine",
            "cases": 53101
          },
          {
            "disease": "HIV/AIDS",
            "vaccine": "No vaccine",
            "cases": 941106
          },
          {
            "disease": "Heart Disease",
            "vaccine": "No vaccine",
            "cases": 72521
          },
          {
            "disease": "Stroke",
            "vaccine": "No vaccine",
            "cases": 807372
          },
          {
            "disease": "Hepatitis B",
            "vaccine": "Hepatitis B vaccine",
            "cases": 123687
          },
          {
            "disease": "Hepatitis C",
            "vaccine": "No vaccine",
            "cases": 801247
          },
          {
            "disease": "Pneumonia",
            "vaccine": "Pneumococcal vaccines",
            "cases": 279879
          },
          {
            "disease": "Tuberculosis",
            "vaccine": "BCG vaccine",
            "cases": 34029
          },
          {
            "disease": "Dengue",
            "vaccine": "Dengvaxia",
            "cases": 874350
          },
          {
            "disease": "Typhoid",
            "vaccine": "Typhoid vaccines",
            "cases": 270487
          }
        ]
      },
      {
        "country": "Mexico",
        "diseases": [
          {
            "disease": "Malaria",
            "vaccine": "RTS,S/AS01 (Mosquirix)",
            "cases": 930417
          },
          {
            "disease": "Influenza",
            "vaccine": "Flu vaccine",
            "cases": 845921
          },
          {
            "disease": "COVID-19",
            "vaccine": "Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Covaxin, Sinovac, Sputnik V",
            "cases": 60095
          },
          {
            "disease": "Cancer",
            "vaccine": "HPV vaccine, Hepatitis B vaccine",
            "cases": 407975
          },
          {
            "disease": "Diabetes",
            "vaccine": "No vaccine",
            "cases": 737209
          },
          {
            "disease": "Alzheimer",
            "vaccine": "No vaccine",
            "cases": 816249
          },
          {
            "disease": "HIV/AIDS",
            "vaccine": "No vaccine",
            "cases": 417963
          },
          {
            "disease": "Heart Disease",
            "vaccine": "No vaccine",
            "cases": 571556
          },
          {
            "disease": "Stroke",
            "vaccine": "No vaccine",
            "cases": 198836
          },
          {
            "disease": "Hepatitis B",
            "vaccine": "Hepatitis B vaccine",
            "cases": 412280
          },
          {
            "disease": "Hepatitis C",
            "vaccine": "No vaccine",
            "cases": 396463
          },
          {
            "disease": "Pneumonia",
            "vaccine": "Pneumococcal vaccines",
            "cases": 237792
          },
          {
            "disease": "Tuberculosis",
            "vaccine": "BCG vaccine",
            "cases": 999059
          },
          {
            "disease": "Dengue",
            "vaccine": "Dengvaxia",
            "cases": 232561
          },
          {
            "disease": "Typhoid",
            "vaccine": "Typhoid vaccines",
            "cases": 947812
          }
        ]
      },
      {
        "country": "Brazil",
        "diseases": [
          {
            "disease": "Malaria",
            "vaccine": "RTS,S/AS01 (Mosquirix)",
            "cases": 364757
          },
          {
            "disease": "Influenza",
            "vaccine": "Flu vaccine",
            "cases": 500737
          },
          {
            "disease": "COVID-19",
            "vaccine": "Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Covaxin, Sinovac, Sputnik V",
            "cases": 748176
          },
          {
            "disease": "Cancer",
            "vaccine": "HPV vaccine, Hepatitis B vaccine",
            "cases": 461767
          },
          {
            "disease": "Diabetes",
            "vaccine": "No vaccine",
            "cases": 774653
          },
          {
            "disease": "Alzheimer",
            "vaccine": "No vaccine",
            "cases": 987423
          },
          {
            "disease": "HIV/AIDS",
            "vaccine": "No vaccine",
            "cases": 840452
          },
          {
            "disease": "Heart Disease",
            "vaccine": "No vaccine",
            "cases": 341845
          },
          {
            "disease": "Stroke",
            "vaccine": "No vaccine",
            "cases": 460038
          },
          {
            "disease": "Hepatitis B",
            "vaccine": "Hepatitis B vaccine",
            "cases": 868489
          },
          {
            "disease": "Hepatitis C",
            "vaccine": "No vaccine",
            "cases": 505857
          },
          {
            "disease": "Pneumonia",
            "vaccine": "Pneumococcal vaccines",
            "cases": 871802
          },
          {
            "disease": "Tuberculosis",
            "vaccine": "BCG vaccine",
            "cases": 127487
          },
          {
            "disease": "Dengue",
            "vaccine": "Dengvaxia",
            "cases": 461401
          },
          {
            "disease": "Typhoid",
            "vaccine": "Typhoid vaccines",
            "cases": 775196
          }
        ]
      },
      {
        "country": "UK",
        "diseases": [
          {
            "disease": "Malaria",
            "vaccine": "RTS,S/AS01 (Mosquirix)",
            "cases": 113612
          },
          {
            "disease": "Influenza",
            "vaccine": "Flu vaccine",
            "cases": 828370
          },
          {
            "disease": "COVID-19",
            "vaccine": "Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Covaxin, Sinovac, Sputnik V",
            "cases": 818492
          },
          {
            "disease": "Cancer",
            "vaccine": "HPV vaccine, Hepatitis B vaccine",
            "cases": 736945
          },
          {
            "disease": "Diabetes",
            "vaccine": "No vaccine",
            "cases": 153594
          },
          {
            "disease": "Alzheimer",
            "vaccine": "No vaccine",
            "cases": 987302
          },
          {
            "disease": "HIV/AIDS",
            "vaccine": "No vaccine",
            "cases": 709272
          },
          {
            "disease": "Heart Disease",
            "vaccine": "No vaccine",
            "cases": 232837
          },
          {
            "disease": "Stroke",
            "vaccine": "No vaccine",
            "cases": 961882
          },
          {
            "disease": "Hepatitis B",
            "vaccine": "Hepatitis B vaccine",
            "cases": 842550
          },
          {
            "disease": "Hepatitis C",
            "vaccine": "No vaccine",
            "cases": 134400
          },
          {
            "disease": "Pneumonia",
            "vaccine": "Pneumococcal vaccines",
            "cases": 871755
          },
          {
            "disease": "Tuberculosis",
            "vaccine": "BCG vaccine",
            "cases": 57543
          },
          {
            "disease": "Dengue",
            "vaccine": "Dengvaxia",
            "cases": 591332
          },
          {
            "disease": "Typhoid",
            "vaccine": "Typhoid vaccines",
            "cases": 110900
          }
        ]
      },
      {
        "country": "France",
        "diseases": [
          {
            "disease": "Malaria",
            "vaccine": "RTS,S/AS01 (Mosquirix)",
            "cases": 902090
          },
          {
            "disease": "Influenza",
            "vaccine": "Flu vaccine",
            "cases": 708545
          },
          {
            "disease": "COVID-19",
            "vaccine": "Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Covaxin, Sinovac, Sputnik V",
            "cases": 954008
          },
          {
            "disease": "Cancer",
            "vaccine": "HPV vaccine, Hepatitis B vaccine",
            "cases": 895982
          },
          {
            "disease": "Diabetes",
            "vaccine": "No vaccine",
            "cases": 244324
          },
          {
            "disease": "Alzheimer",
            "vaccine": "No vaccine",
            "cases": 326375
          },
          {
            "disease": "HIV/AIDS",
            "vaccine": "No vaccine",
            "cases": 684156
          },
          {
            "disease": "Heart Disease",
            "vaccine": "No vaccine",
            "cases": 85022
          },
          {
            "disease": "Stroke",
            "vaccine": "No vaccine",
            "cases": 697917
          },
          {
            "disease": "Hepatitis B",
            "vaccine": "Hepatitis B vaccine",
            "cases": 989164
          },
          {
            "disease": "Hepatitis C",
            "vaccine": "No vaccine",
            "cases": 857655
          },
          {
            "disease": "Pneumonia",
            "vaccine": "Pneumococcal vaccines",
            "cases": 262651
          },
          {
            "disease": "Tuberculosis",
            "vaccine": "BCG vaccine",
            "cases": 989827
          },
          {
            "disease": "Dengue",
            "vaccine": "Dengvaxia",
            "cases": 795545
          },
          {
            "disease": "Typhoid",
            "vaccine": "Typhoid vaccines",
            "cases": 888451
          }
        ]
      },
      {
        "country": "Germany",
        "diseases": [
          {
            "disease": "Malaria",
            "vaccine": "RTS,S/AS01 (Mosquirix)",
            "cases": 91707
          },
          {
            "disease": "Influenza",
            "vaccine": "Flu vaccine",
            "cases": 385045
          },
          {
            "disease": "COVID-19",
            "vaccine": "Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Covaxin, Sinovac, Sputnik V",
            "cases": 435490
          },
          {
            "disease": "Cancer",
            "vaccine": "HPV vaccine, Hepatitis B vaccine",
            "cases": 328478
          },
          {
            "disease": "Diabetes",
            "vaccine": "No vaccine",
            "cases": 288820
          },
          {
            "disease": "Alzheimer",
            "vaccine": "No vaccine",
            "cases": 553928
          },
          {
            "disease": "HIV/AIDS",
            "vaccine": "No vaccine",
            "cases": 383856
          },
          {
            "disease": "Heart Disease",
            "vaccine": "No vaccine",
            "cases": 69818
          },
          {
            "disease": "Stroke",
            "vaccine": "No vaccine",
            "cases": 208004
          },
          {
            "disease": "Hepatitis B",
            "vaccine": "Hepatitis B vaccine",
            "cases": 27694
          },
          {
            "disease": "Hepatitis C",
            "vaccine": "No vaccine",
            "cases": 971607
          },
          {
            "disease": "Pneumonia",
            "vaccine": "Pneumococcal vaccines",
            "cases": 986015
          },
          {
            "disease": "Tuberculosis",
            "vaccine": "BCG vaccine",
            "cases": 561054
          },
          {
            "disease": "Dengue",
            "vaccine": "Dengvaxia",
            "cases": 54979
          },
          {
            "disease": "Typhoid",
            "vaccine": "Typhoid vaccines",
            "cases": 444009
          }
        ]
      },
      {
        "country": "Italy",
        "diseases": [
          {
            "disease": "Malaria",
            "vaccine": "RTS,S/AS01 (Mosquirix)",
            "cases": 81802
          },
          {
            "disease": "Influenza",
            "vaccine": "Flu vaccine",
            "cases": 253164
          },
          {
            "disease": "COVID-19",
            "vaccine": "Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Covaxin, Sinovac, Sputnik V",
            "cases": 500357
          },
          {
            "disease": "Cancer",
            "vaccine": "HPV vaccine, Hepatitis B vaccine",
            "cases": 822471
          },
          {
            "disease": "Diabetes",
            "vaccine": "No vaccine",
            "cases": 233234
          },
          {
            "disease": "Alzheimer",
            "vaccine": "No vaccine",
            "cases": 530896
          },
          {
            "disease": "HIV/AIDS",
            "vaccine": "No vaccine",
            "cases": 886393
          },
          {
            "disease": "Heart Disease",
            "vaccine": "No vaccine",
            "cases": 914849
          },
          {
            "disease": "Stroke",
            "vaccine": "No vaccine",
            "cases": 738339
          },
          {
            "disease": "Hepatitis B",
            "vaccine": "Hepatitis B vaccine",
            "cases": 974999
          },
          {
            "disease": "Hepatitis C",
            "vaccine": "No vaccine",
            "cases": 768425
          },
          {
            "disease": "Pneumonia",
            "vaccine": "Pneumococcal vaccines",
            "cases": 349157
          },
          {
            "disease": "Tuberculosis",
            "vaccine": "BCG vaccine",
            "cases": 978770
          },
          {
            "disease": "Dengue",
            "vaccine": "Dengvaxia",
            "cases": 961836
          },
          {
            "disease": "Typhoid",
            "vaccine": "Typhoid vaccines",
            "cases": 373851
          }
        ]
      },
      {
        "country": "Spain",
        "diseases": [
          {
            "disease": "Malaria",
            "vaccine": "RTS,S/AS01 (Mosquirix)",
            "cases": 22813
          },
          {
            "disease": "Influenza",
            "vaccine": "Flu vaccine",
            "cases": 220815
          },
          {
            "disease": "COVID-19",
            "vaccine": "Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Covaxin, Sinovac, Sputnik V",
            "cases": 24631
          },
          {
            "disease": "Cancer",
            "vaccine": "HPV vaccine, Hepatitis B vaccine",
            "cases": 35522
          },
          {
            "disease": "Diabetes",
            "vaccine": "No vaccine",
            "cases": 825859
          },
          {
            "disease": "Alzheimer",
            "vaccine": "No vaccine",
            "cases": 417672
          },
          {
            "disease": "HIV/AIDS",
            "vaccine": "No vaccine",
            "cases": 238633
          },
          {
            "disease": "Heart Disease",
            "vaccine": "No vaccine",
            "cases": 134247
          },
          {
            "disease": "Stroke",
            "vaccine": "No vaccine",
            "cases": 974277
          },
          {
            "disease": "Hepatitis B",
            "vaccine": "Hepatitis B vaccine",
            "cases": 385874
          },
          {
            "disease": "Hepatitis C",
            "vaccine": "No vaccine",
            "cases": 218488
          },
          {
            "disease": "Pneumonia",
            "vaccine": "Pneumococcal vaccines",
            "cases": 870600
          },
          {
            "disease": "Tuberculosis",
            "vaccine": "BCG vaccine",
            "cases": 329399
          },
          {
            "disease": "Dengue",
            "vaccine": "Dengvaxia",
            "cases": 22040
          },
          {
            "disease": "Typhoid",
            "vaccine": "Typhoid vaccines",
            "cases": 868558
          }
        ]
      },
      {
        "country": "Russia",
        "diseases": [
          {
            "disease": "Malaria",
            "vaccine": "RTS,S/AS01 (Mosquirix)",
            "cases": 564537
          },
          {
            "disease": "Influenza",
            "vaccine": "Flu vaccine",
            "cases": 246964
          },
          {
            "disease": "COVID-19",
            "vaccine": "Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Covaxin, Sinovac, Sputnik V",
            "cases": 999690
          },
          {
            "disease": "Cancer",
            "vaccine": "HPV vaccine, Hepatitis B vaccine",
            "cases": 425750
          },
          {
            "disease": "Diabetes",
            "vaccine": "No vaccine",
            "cases": 434114
          },
          {
            "disease": "Alzheimer",
            "vaccine": "No vaccine",
            "cases": 479759
          },
          {
            "disease": "HIV/AIDS",
            "vaccine": "No vaccine",
            "cases": 583020
          },
          {
            "disease": "Heart Disease",
            "vaccine": "No vaccine",
            "cases": 633465
          },
          {
            "disease": "Stroke",
            "vaccine": "No vaccine",
            "cases": 855915
          },
          {
            "disease": "Hepatitis B",
            "vaccine": "Hepatitis B vaccine",
            "cases": 184961
          },
          {
            "disease": "Hepatitis C",
            "vaccine": "No vaccine",
            "cases": 409777
          },
          {
            "disease": "Pneumonia",
            "vaccine": "Pneumococcal vaccines",
            "cases": 573724
          },
          {
            "disease": "Tuberculosis",
            "vaccine": "BCG vaccine",
            "cases": 187821
          },
          {
            "disease": "Dengue",
            "vaccine": "Dengvaxia",
            "cases": 424507
          },
          {
            "disease": "Typhoid",
            "vaccine": "Typhoid vaccines",
            "cases": 106379
          }
        ]
      },
      {
        "country": "China",
        "diseases": [
          {
            "disease": "Malaria",
            "vaccine": "RTS,S/AS01 (Mosquirix)",
            "cases": 171602
          },
          {
            "disease": "Influenza",
            "vaccine": "Flu vaccine",
            "cases": 606581
          },
          {
            "disease": "COVID-19",
            "vaccine": "Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Covaxin, Sinovac, Sputnik V",
            "cases": 816671
          },
          {
            "disease": "Cancer",
            "vaccine": "HPV vaccine, Hepatitis B vaccine",
            "cases": 465048
          },
          {
            "disease": "Diabetes",
            "vaccine": "No vaccine",
            "cases": 520371
          },
          {
            "disease": "Alzheimer",
            "vaccine": "No vaccine",
            "cases": 553793
          },
          {
            "disease": "HIV/AIDS",
            "vaccine": "No vaccine",
            "cases": 888835
          },
          {
            "disease": "Heart Disease",
            "vaccine": "No vaccine",
            "cases": 805654
          },
          {
            "disease": "Stroke",
            "vaccine": "No vaccine",
            "cases": 296859
          },
          {
            "disease": "Hepatitis B",
            "vaccine": "Hepatitis B vaccine",
            "cases": 482404
          },
          {
            "disease": "Hepatitis C",
            "vaccine": "No vaccine",
            "cases": 148277
          },
          {
            "disease": "Pneumonia",
            "vaccine": "Pneumococcal vaccines",
            "cases": 222334
          },
          {
            "disease": "Tuberculosis",
            "vaccine": "BCG vaccine",
            "cases": 749317
          },
          {
            "disease": "Dengue",
            "vaccine": "Dengvaxia",
            "cases": 498752
          },
          {
            "disease": "Typhoid",
            "vaccine": "Typhoid vaccines",
            "cases": 731506
          }
        ]
      },
      {
        "country": "India",
        "diseases": [
          {
            "disease": "Malaria",
            "vaccine": "RTS,S/AS01 (Mosquirix)",
            "cases": 397236
          },
          {
            "disease": "Influenza",
            "vaccine": "Flu vaccine",
            "cases": 95164
          },
          {
            "disease": "COVID-19",
            "vaccine": "Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Covaxin, Sinovac, Sputnik V",
            "cases": 476697
          },
          {
            "disease": "Cancer",
            "vaccine": "HPV vaccine, Hepatitis B vaccine",
            "cases": 417562
          },
          {
            "disease": "Diabetes",
            "vaccine": "No vaccine",
            "cases": 354456
          },
          {
            "disease": "Alzheimer",
            "vaccine": "No vaccine",
            "cases": 524912
          },
          {
            "disease": "HIV/AIDS",
            "vaccine": "No vaccine",
            "cases": 953826
          },
          {
            "disease": "Heart Disease",
            "vaccine": "No vaccine",
            "cases": 858516
          },
          {
            "disease": "Stroke",
            "vaccine": "No vaccine",
            "cases": 336404
          },
          {
            "disease": "Hepatitis B",
            "vaccine": "Hepatitis B vaccine",
            "cases": 580985
          },
          {
            "disease": "Hepatitis C",
            "vaccine": "No vaccine",
            "cases": 306539
          },
          {
            "disease": "Pneumonia",
            "vaccine": "Pneumococcal vaccines",
            "cases": 365218
          },
          {
            "disease": "Tuberculosis",
            "vaccine": "BCG vaccine",
            "cases": 339881
          },
          {
            "disease": "Dengue",
            "vaccine": "Dengvaxia",
            "cases": 16514
          },
          {
            "disease": "Typhoid",
            "vaccine": "Typhoid vaccines",
            "cases": 480617
          }
        ]
      },
      {
        "country": "Australia",
        "diseases": [
          {
            "disease": "Malaria",
            "vaccine": "RTS,S/AS01 (Mosquirix)",
            "cases": 458323
          },
          {
            "disease": "Influenza",
            "vaccine": "Flu vaccine",
            "cases": 993082
          },
          {
            "disease": "COVID-19",
            "vaccine": "Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Covaxin, Sinovac, Sputnik V",
            "cases": 602235
          },
          {
            "disease": "Cancer",
            "vaccine": "HPV vaccine, Hepatitis B vaccine",
            "cases": 772738
          },
          {
            "disease": "Diabetes",
            "vaccine": "No vaccine",
            "cases": 420089
          },
          {
            "disease": "Alzheimer",
            "vaccine": "No vaccine",
            "cases": 454927
          },
          {
            "disease": "HIV/AIDS",
            "vaccine": "No vaccine",
            "cases": 421804
          },
          {
            "disease": "Heart Disease",
            "vaccine": "No vaccine",
            "cases": 684422
          },
          {
            "disease": "Stroke",
            "vaccine": "No vaccine",
            "cases": 281379
          },
          {
            "disease": "Hepatitis B",
            "vaccine": "Hepatitis B vaccine",
            "cases": 656896
          },
          {
            "disease": "Hepatitis C",
            "vaccine": "No vaccine",
            "cases": 987123
          },
          {
            "disease": "Pneumonia",
            "vaccine": "Pneumococcal vaccines",
            "cases": 157078
          },
          {
            "disease": "Tuberculosis",
            "vaccine": "BCG vaccine",
            "cases": 315435
          },
          {
            "disease": "Dengue",
            "vaccine": "Dengvaxia",
            "cases": 755567
          },
          {
            "disease": "Typhoid",
            "vaccine": "Typhoid vaccines",
            "cases": 731341
          }
        ]
      },
      {
        "country": "South Africa",
        "diseases": [
          {
            "disease": "Malaria",
            "vaccine": "RTS,S/AS01 (Mosquirix)",
            "cases": 826040
          },
          {
            "disease": "Influenza",
            "vaccine": "Flu vaccine",
            "cases": 111198
          },
          {
            "disease": "COVID-19",
            "vaccine": "Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Covaxin, Sinovac, Sputnik V",
            "cases": 200775
          },
          {
            "disease": "Cancer",
            "vaccine": "HPV vaccine, Hepatitis B vaccine",
            "cases": 487814
          },
          {
            "disease": "Diabetes",
            "vaccine": "No vaccine",
            "cases": 288714
          },
          {
            "disease": "Alzheimer",
            "vaccine": "No vaccine",
            "cases": 975793
          },
          {
            "disease": "HIV/AIDS",
            "vaccine": "No vaccine",
            "cases": 670131
          },
          {
            "disease": "Heart Disease",
            "vaccine": "No vaccine",
            "cases": 714286
          },
          {
            "disease": "Stroke",
            "vaccine": "No vaccine",
            "cases": 822649
          },
          {
            "disease": "Hepatitis B",
            "vaccine": "Hepatitis B vaccine",
            "cases": 945270
          },
          {
            "disease": "Hepatitis C",
            "vaccine": "No vaccine",
            "cases": 346132
          },
          {
            "disease": "Pneumonia",
            "vaccine": "Pneumococcal vaccines",
            "cases": 409768
          },
          {
            "disease": "Tuberculosis",
            "vaccine": "BCG vaccine",
            "cases": 785798
          },
          {
            "disease": "Dengue",
            "vaccine": "Dengvaxia",
            "cases": 694734
          },
          {
            "disease": "Typhoid",
            "vaccine": "Typhoid vaccines",
            "cases": 840807
          }
        ]
      },
      {
        "country": "Egypt",
        "diseases": [
          {
            "disease": "Malaria",
            "vaccine": "RTS,S/AS01 (Mosquirix)",
            "cases": 620150
          },
          {
            "disease": "Influenza",
            "vaccine": "Flu vaccine",
            "cases": 479450
          },
          {
            "disease": "COVID-19",
            "vaccine": "Pfizer-BioNTech, Moderna, Johnson & Johnson, AstraZeneca, Covaxin, Sinovac, Sputnik V",
            "cases": 163132
          },
          {
            "disease": "Cancer",
            "vaccine": "HPV vaccine, Hepatitis B vaccine",
            "cases": 529413
          },
          {
            "disease": "Diabetes",
            "vaccine": "No vaccine",
            "cases": 907776
          },
          {
            "disease": "Alzheimer",
            "vaccine": "No vaccine",
            "cases": 74116
          },
          {
            "disease": "HIV/AIDS",
            "vaccine": "No vaccine",
            "cases": 81176
          },
          {
            "disease": "Heart Disease",
            "vaccine": "No vaccine",
            "cases": 388203
          },
          {
            "disease": "Stroke",
            "vaccine": "No vaccine",
            "cases": 48186
          },
          {
            "disease": "Hepatitis B",
            "vaccine": "Hepatitis B vaccine",
            "cases": 612446
          },
          {
            "disease": "Hepatitis C",
            "vaccine": "No vaccine",
            "cases": 51191
          },
          {
            "disease": "Pneumonia",
            "vaccine": "Pneumococcal vaccines",
            "cases": 193232
          },
          {
            "disease": "Tuberculosis",
            "vaccine": "BCG vaccine",
            "cases": 393660
          },
          {
            "disease": "Dengue",
            "vaccine": "Dengvaxia",
            "cases": 216900
          },
          {
            "disease": "Typhoid",
            "vaccine": "Typhoid vaccines",
            "cases": 46575
          }
        ]
      }
    ];
    for (const item of data) {
      for (const disease of item.diseases) {
        await Disease.create({
          country: item.country,
          disease: disease.disease,
          vaccine: disease.vaccine,
          cases: disease.cases
        });
      }
    }
    res.status(200).send('Database populated successfully.');
  } catch (error) {
    console.log("The error", error);
    res.status(500).send('An error occurred while populating the database.');
  }
});

router.get('/getDisease', async (req, res) => {
  const diseaseId = req.query.diseaseId;
  if (!diseaseId) {
    return res.status(400).json({ message: 'Disease ID is required.' });
  }

  try {
    const disease = await Disease.findByPk(diseaseId);
    if (!disease) {
      return res.status(404).json({ message: 'No disease found with this ID.' });
    }

    res.status(200).json({
      disease: disease,
    });
  } catch (error) {
    console.error('Error fetching disease:', error);
    res.status(500).json({ message: 'Error fetching disease' });
  }
});

router.patch('/updateDisease', async (req, res) => {
  const { disease, country, vaccine, cases } = req.body;
  const idisease = await Disease.findByPk(req.query.diseaseId);

  try {
    if (!idisease) {
      return res.status(400).json({ message: 'Disease not found' });
    }
    idisease.disease = disease || idisease.disease;
    idisease.country = country || idisease.country;
    idisease.vaccine = vaccine || idisease.vaccine;
    idisease.cases = cases || idisease.cases;

    await idisease.save();

    res.status(200).json({
      message: 'Disease updated successfully',
      disease: disease,
    });
  } catch (error) {
    console.error('Error updating disease:', error);
    res.status(500).json({ message: 'Error updating disease' });
  }
});

router.post('/removeDisease', async (req, res) => {
  const disease = await Disease.findByPk(req.query.diseaseId);
console.log(req.query.diseaseId);
  try {
    if (!disease) {
      return res.status(400).json({ message: 'Disease not found' });
    }

    await disease.destroy();

    res.status(200).json({
      message: 'Disease removed successfully',
    });
  } catch (error) {
    console.error('Error removing disease:', error);
    res.status(500).json({ message: 'Error removing disease' });
  }
});

router.post('/addDisease', async (req, res) => {
  const { disease, country, vaccine, cases } = req.body;
  
  try {
    if (!disease || !country || !vaccine || !cases) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newDisease = await Disease.create({
      disease: disease,
      country: country,
      vaccine: vaccine,
      cases: cases
    });

    res.status(201).json({
      message: 'Disease added successfully',
      disease: newDisease,
    });
  } catch (error) {
    console.error('Error adding disease:', error);
    res.status(500).json({ message: 'Error adding disease' });
  }
});


module.exports = router;
