/**
 * Created by sebastianlee on 11/28/14.
 *
 */

/*global exports, require, prettyjson, console */
var _, prettyjson;

_ = require('lodash');
prettyjson = require('prettyjson');
var serviceReports = [
  {
    "id": 290,
    "number_of_submission": 0,
    "latest": false,
    "address": {
      "name": "The Lakefront residence",
      "block_number": "42",
      "street_name": "Lakeside drive",
      "unit_number": "12-345",
      "postal_code": 648315
    },
    "request_submitted_date": "06/01/2015",
    "sent_to_agent": true,
    "new_admin_message": false
  },
  {
    "id": 289,
    "number_of_submission": 0,
    "latest": false,
    "address": {
      "name": "",
      "block_number": "1",
      "street_name": "Draycott Park",
      "unit_number": "12-03",
      "postal_code": 259385
    },
    "request_submitted_date": "30/12/2014",
    "sent_to_agent": false,
    "new_admin_message": false
  }];

var areaServices289 = [
  {
    "area": {
      "id": 31,
      "name": "Shower Curtain"
    },
    "room": {
      "id": 787,
      "template_room": 8,
      "name": "Bathroom 1",
      "description": ""
    },
    "issue": {
      "template_issue": {
        "id": 151,
        "template_area": 31,
        "name": "Damaged",
        "status": "damaged",
        "quotation_required": true,
        "additional_instructions": "1. Take Photo <br/> 2. Dimensions of curtain <br/>"
      },
      "id": 1759,
      "remarks": "",
      "client_image_id": "1417153038155",
      "image_count": 0
    },
    "solutions": [],
    "id": 1759,
    "service_report": 290,
    "user_changeable": false,
    "user_data_remarks": "",
    "requires_quotation": true,
    "service_provider_selected": false,
    "accepted_quotation": null
  },
  {
    "area": {
      "id": 38,
      "name": "Cabinet/Shelf"
    },
    "room": {
      "id": 788,
      "template_room": 10,
      "name": "Store Room 1",
      "description": ""
    },
    "issue": {
      "template_issue": {
        "id": 189,
        "template_area": 38,
        "name": "Chipped cabinet",
        "status": "damaged",
        "quotation_required": true,
        "additional_instructions": "1. Take Photo <br/>"
      },
      "id": 1766,
      "remarks": "",
      "client_image_id": "1417153046645",
      "image_count": 0
    },
    "solutions": [],
    "id": 1766,
    "service_report": 290,
    "user_changeable": false,
    "user_data_remarks": "",
    "requires_quotation": true,
    "service_provider_selected": false,
    "accepted_quotation": null
  }
];

var serviceReport289 = {
  "listing_id": 1,
  "service_by_date": "01/12/2014",
  "service_report_generated_date": null,
  "request_generated_date": "28/11/2014",
  "service_manager": null,
  "address": {
    "name": "",
    "block_number": "",
    "street_name": "Bukit batok central",
    "unit_number": "12-345",
    "postal_code": 650106
  },
  "area_services": areaServices289,
  "house_services": [],
  "service_start_date": "01/01/2015",
  "additional_request_data": {
    "service_manager": {
      "required": false,
      "appointment": {
        "date": "11/29/2014",
        "time": "0800-1000"
      }
    }
  },
  "cleaning": [
    {
      "id": 3,
      "service_report": 290,
      "user_changeable": false,
      "user_data_remarks": "",
      "requires_quotation": true,
      "price": null,
      "selected": false,
      "selected_datetime": null,
      "name": "Spring Cleaning"
    }
  ],
  "curtains": [
    {
      "return_date": "01/12/2014",
      "id": 3,
      "service_report": 290,
      "user_changeable": false,
      "user_data_remarks": "",
      "requires_quotation": true,
      "price": null,
      "selected": false,
      "selected_datetime": null,
      "type": "Day Curtain",
      "quantity": 1,
      "dimension": ""
    }, {
      "return_date": "12/12/2014",
      "id": 4,
      "service_report": 290,
      "user_changeable": false,
      "user_data_remarks": "",
      "requires_quotation": true,
      "price": null,
      "selected": false,
      "selected_datetime": null,
      "type": "Night Curtain",
      "quantity": 1,
      "dimension": ""
    }
  ],
  "carpets": [
    {
      "return_date": "01/12/2014",
      "id": 3,
      "service_report": 290,
      "user_changeable": false,
      "user_data_remarks": "",
      "requires_quotation": true,
      "price": null,
      "selected": false,
      "selected_datetime": null,
      "quantity": 1,
      "material": "Nylon Carpet",
      "dimension_x": null,
      "dimension_y": null,
      "dimension_unit": "feet"
    }, {
      "return_date": "01/12/2014",
      "id": 3,
      "service_report": 290,
      "user_changeable": false,
      "user_data_remarks": "",
      "requires_quotation": true,
      "price": null,
      "selected": false,
      "selected_datetime": null,
      "quantity": 1,
      "material": "Nylon Carpet",
      "dimension_x": null,
      "dimension_y": null,
      "dimension_unit": "feet"
    }
  ],
  "id": 289,
  "type": "walkthrough",
  "agent": 1,
  "quotation_done": false,
  "quotation_done_date": null,
  "sent_to_agent": false,
  "latest": false,
  "number_of_submission": 0,
  "is_active": true,
  "created": "2014-11-28T05:37:00.971Z",
  "remarks": "",
  "service_start_time": "",
  "service_start_changeable": true,
  "new_admin_message": false,
  "new_agent_message": false
};

var areaServices290 = [
  {
    "area": {
      "id": 31,
      "name": "Shower Curtain"
    },
    "room": {
      "id": 787,
      "template_room": 8,
      "name": "Bathroom 1",
      "description": "Some description. "
    },
    "issue": {
      "template_issue": {
        "id": 151,
        "template_area": 31,
        "name": "Damaged",
        "status": "damaged",
        "quotation_required": true,
        "additional_instructions": "1. Take Photo <br/> 2. Dimensions of curtain <br/>"
      },
      "id": 1759,
      "remarks": "",
      "client_image_id": "1417153038155",
      "image_count": 0
    },
    "images" : [{image: "http://afteryou.co/media/service_images/339_1420511707573_1.jpg"}, {image: "http://afteryou.co/media/service_images/339_1420511707573_0.jpg"}],
    "solutions": [
      {
        "name": "Replace with Ikea Curtains",
        "id": 2,
        "solution": 52,
        "area_service": 1759,
        "unit_price": "150.00",
        "unit": "Per Piece",
        "quantity": 1,
        "description": "",
        "selected": false
      },
      {
        "name": "Replace with original curtain",
        "id": 3,
        "solution": 53,
        "area_service": 1760,
        "unit_price": "270.00",
        "unit": "Per Piece",
        "quantity": 1,
        "description": "Buy back from original supplier",
        "selected": false
      },
      {
        "name": "Wash and dry curtain",
        "id": 4,
        "solution": 54,
        "area_service": 1761,
        "unit_price": "100.00",
        "unit": "per Piece",
        "quantity": 1,
        "description": "Wash and dry curtain",
        "selected": false,
        "selected_datetime": null
      }
    ],
    "selected_datetime": null,
    "id": 1759,
    "service_report": 290,
    "user_changeable": true,
    "user_data_remarks": "Replace it ",
    "requires_quotation": true,
    "service_provider_selected": false,
    "accepted_quotation": null
  },
  {
    "area": {
      "id": 38,
      "name": "Cabinet/Shelf"
    },
    "room": {
      "id": 788,
      "template_room": 10,
      "name": "Store Room 1",
      "description": ""
    },
    "issue": {
      "template_issue": {
        "id": 189,
        "template_area": 38,
        "name": "Chipped cabinet",
        "status": "damaged",
        "quotation_required": true,
        "additional_instructions": "1. Take Photo <br/>"
      },
      "id": 1766,
      "remarks": "",
      "client_image_id": "1417153046645",
      "image_count": 0
    },
    "solutions": [
      {
        "name": "Patch up cabinet",
        "id": 1,
        "solution": 25,
        "area_service": 1766,
        "unit_price": "202.00",
        "unit": "per piece",
        "quantity": 1,
        "description": "Would be purchasing a new one from Ikea",
        "selected": false
      }
    ],
    "id": 1766,
    "selected_datetime": null,
    "service_report": 290,
    "user_changeable": true,
    "user_data_remarks": "",
    "requires_quotation": true,
    "service_provider_selected": false,
    "accepted_quotation": null
  }
];

var cleaning290 = [
  {
    "id": 3,
    "service_report": 290,
    "user_changeable": true,
    "user_data_remarks": "Please clean my house.",
    "requires_quotation": false,
    "price": "230.00",
    "selected": false,
    "quantity": 1,
    "selected_datetime": null,
    "name": "Spring Cleaning",
    "description": "Sending 3 cleaners for 4 hours  "
  }
];

var curtain290 = [{
  "return_date": "01/12/2014",
  "id": 3,
  "service_report": 290,
  "user_changeable": true,
  "user_data_remarks": "There is bird stain. Please remove it for me.",
  "requires_quotation": false,
  "price": "9.00",
  "selected": false,
  "selected_datetime": null,
  "unit": "per kg",
  "type": "Day Curtain",
  "quantity": 1,
  "dimension": "",
  "description": "Removing bird stain using steam wash "
}, {
  "return_date": "01/12/2014",
  "id": 3,
  "service_report": 290,
  "user_changeable": true,
  "user_data_remarks": "There is bird stain. Please remove it for me.",
  "requires_quotation": false,
  "price": "90.00",
  "unit": "per KG",
  "selected": false,
  "selected_datetime": null,
  "type": "Night Curtain",
  "quantity": 2,
  "dimension": "",
  "description": "Removing bird stain using steam wash "
}];

var carpet290 = [{
  "return_date": "01/12/2014",
  "id": 3,
  "service_report": 290,
  "user_changeable": true,
  "user_data_remarks": "",
  "requires_quotation": false,
  "price": "200.00",
  "selected": false,
  "selected_datetime": null,
  "unit": "per piece",
  "quantity": 2,
  "material": "Nylon Carpet",
  "dimension_x": null,
  "dimension_y": null,
  "dimension_unit": "feet",
  "description": "Festive season, requires an additional of 2 working days"
}];

var serviceReport290 = {
  "listing_id": 518,
  "service_by_date": "01/12/2014",
  "service_report_generated_date": "01/12/2014",
  "request_generated_date": "28/11/2014",
  "service_manager": null,
  "address": {
    "name": "The Lakefront residence",
    "block_number": "42",
    "street_name": "Lakeside drive",
    "unit_number": "12-345",
    "postal_code": 648315
  },
  "area_services": areaServices290,
  "house_services": [],
  "service_start_date": null,
  "additional_request_data": {
    "service_manager": {
      "required": false,
      "appointment": {
        "date": "11/29/2014",
        "time": "0800-1000"
      }
    }
  },
  "cleaning": cleaning290,
  "curtains": curtain290,
  "carpets": carpet290,
  "id": 290,
  "type": "walkthrough",
  "agent": 1,
  "quotation_done": true,
  "quotation_done_date": "11/28/2014",
  "sent_to_agent": true,
  "latest": false,
  "number_of_submission": 0,
  "is_active": true,
  "created": "2014-11-28T05:37:00.971Z",
  "remarks": "",
  "service_start_time": "",
  "service_start_changeable": true,
  "new_admin_message": false,
  "new_agent_message": false
};

var serviceReport = [serviceReport290, serviceReport289];

exports.getAll = function () {
  'use strict';
  return serviceReports;
};

exports.getServiceReport = function (id) {
  'use strict';
  var service_report = _.find(serviceReport, { id: +id });
  return _.find(serviceReport, { id: +id });
};

exports.setServiceReportLatest = function (id, value) {
  'use strict';
  var service_report = _.find(serviceReports, { id: +id });
  service_report.latest = value;
};

exports.setUserChangeable = function (request) {
  'use strict';

  request.area_services.forEach(function (area_service) {
    area_service.solutions.forEach(function (solution) {
      if (solution.selected) {
        area_service.user_changeable = false;
        area_service.selected_datetime = Date.now();
      }
    });
  });
  request.cleaning.forEach(function (clean) {
    if (clean.selected) {
      clean.user_changeable = false;
      clean.selected_datetime = Date.now();
    }
  });
  request.curtains.forEach(function (curtain) {
    if (curtain.selected) {
      curtain.user_changeable = false;
      curtain.selected_datetime = Date.now();
    }
  });
  request.carpets.forEach(function (carpet) {
    if (carpet.selected) {
      carpet.user_changeable = false;
      carpet.selected_datetime = Date.now();
    }
  });
  serviceReport.unshift(request);
};



