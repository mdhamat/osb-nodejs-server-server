"use strict";

/**
 * get the catalog of services that the service broker offers
 *
 * xBrokerAPIVersion String version number of the Service Broker API that the Platform will use
 * returns Catalog
 **/
exports.catalogGetUsingGET = function (xBrokerAPIVersion) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples["application/json"] = {
      services: [
        {
          bindable: false,
          metadata: {},
          plan_updateable: true,
          plans: [
            {
              name: "Small",
              free: false,
              description: "Up to 100 EPS/month",
              id: "475428ab-e9de-4556-a905-2be3ca4db1b9",
              metadata: {
                regional: false,
                subscription: false,
                paidOnly: true,
                allowInternalUsers: true,
                subscriptionOnly: false,
                reservable: false,
                displayName: "Small Instance",
                bullets: ["Up to 100 EPS/month"],
                costs: [
                  {
                    partNumber: "D0FQPZX",
                    unit: "Instance",
                    unitId: "UNITS",
                    resourceDisplayName: "INSTANCES",
                    rating_model: "monthlyproration",
                    rating_scale: 1,
                    free_units: 0,
                    instance_free_units: 0,
                    scale: 1,
                    is_rated: true,
                    rmcGenTime: 1689610992207,
                    unitDisplayName: "Small Instance",
                    model: "monthlyproration",
                  },
                ],
              },
              pricingCatalogRev: "6-e6022e77da32d52a608a1404083c3395",
              pricingCatalogId: "0cdc87de72dd86687497100c320a4526",
              effective_from: "2023-06-20T00:00:00.000Z",
              effective_until: "9999-12-31T00:00:00.000Z",
            },
            {
              name: "Medium",
              free: false,
              description: "Up to 200 EPS/month",
              id: "8cbdbfd0-99b2-4875-9e2f-ac9e9e6fa666",
              metadata: {
                regional: false,
                displayName: "Medium Instance",
                allowInternalUsers: true,
                subscription: false,
                paidOnly: true,
                reservable: false,
                subscriptionOnly: false,
                bullets: ["Up to 200 EPS/month"],
                costs: [
                  {
                    partNumber: "D0FQRZX",
                    unit: "Instance",
                    unitId: "INSTANCES",
                    resourceDisplayName: "INSTANCES",
                    rating_model: "monthlyproration",
                    rating_scale: 1,
                    free_units: 0,
                    instance_free_units: 0,
                    scale: 1,
                    is_rated: true,
                    rmcGenTime: 1689342026117,
                    model: "monthlyproration",
                    unitDisplayName: "Medium Instance",
                  },
                ],
              },
              pricingCatalogRev: "5-85ad74b53e05598c50f4fec6cd16d5c5",
              pricingCatalogId: "93c0db37445ff39feaf5c18abd092408",
              effective_from: "2023-06-20T00:00:00.000Z",
              effective_until: "9999-12-31T00:00:00.000Z",
            },
            {
              name: "Large",
              free: false,
              description: "Up to 400 EPS/month",
              id: "c4fa53b0-3c8d-4bef-8c4a-57d56793dc11",
              metadata: {
                regional: false,
                displayName: "Large Instance",
                subscription: false,
                paidOnly: true,
                allowInternalUsers: true,
                reservable: false,
                subscriptionOnly: false,
                bullets: ["Up to 400 EPS/month"],
                costs: [
                  {
                    partNumber: "D0FQQZX",
                    unit: "Instance",
                    unitId: "INSTANCES",
                    resourceDisplayName: "INSTANCES",
                    rating_model: "monthlyproration",
                    rating_scale: 1,
                    free_units: 0,
                    instance_free_units: 0,
                    scale: 1,
                    is_rated: true,
                    model: "monthlyproration",
                    rmcGenTime: 1689342085333,
                    unitDisplayName: "Large Instance",
                  },
                ],
              },
              pricingCatalogRev: "4-a26cbd436346967aec6599499a92c5f2",
              pricingCatalogId: "d7319f5277db0bd9ba15677a3a0af059",
              effective_from: "2023-06-20T00:00:00.000Z",
              effective_until: "9999-12-31T00:00:00.000Z",
            },
          ],
          binding_rotatable: false,
          name: "qroc",
          description: "description",
          id: "fc91f380-fff4-11ed-998a-d11ad693cd33",
          dashboard_client: {
            id: "id",
            redirect_uri: "redirect_uri",
            secret: "secret",
          },
          // requires: ["route_forwarding", "route_forwarding"],
          // tags: ["tags", "tags"],
        },
      ],
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
