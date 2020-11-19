import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private distributorProp = [
    {
      avatar: "assets/proposition.svg",
      title: "Differentiate your Proposition",
      description:
        "Leverage your data asset to build a complete proposition bespoke to your business need."
    },
    {
      avatar: "assets/proposition2.svg",
      title: "Grow Revenues & Margins",
      description:
        "Attract new customers and increase share of lifetime value on existing by turning customers from transactions into long term relationships"
    },
    {
      avatar: "assets/proposition3.svg",
      title: "Minimise cost & capital outlay",
      description:
        " Leverage our infrastructure and flexible integration model to minimise internal build and get to market quickly"
    }
  ];

  private supplierProp = [
    {
      avatar: "assets/digital.svg",
      title: "New Digital Markets",
      description:
        " Access an existing distribution ecosystem and facilitate your own agendas to grow revenues and margins."
    },
    {
      avatar: "assets/iterate.svg",
      title: "Quickly Build & Iterate",
      description:
        " Rapid product development and iteration within a scalable, managed process to generate sales within a compliant framework."
    },
    {
      avatar: "assets/access.svg",
      title: "Access New Data & Insights",
      description:
        "Leverage open data by applying deep tech and machine learning to push the boundaries of traditional thinking and differentiate versus legacy competition."
    }
  ];

  private distService = [
    {
      avatar: "assets/engagement.svg",
      title: "Engagement",
      description:
        " Anaylse your customer base, build propositions that solve their problems, and intelligently engage."
    },
    {
      avatar: "assets/recommendation.svg",
      title: "Recommendations",
      description:
        "Automated decision making support designed to help customers make the right choices for them."
    },
    {
      avatar: "assets/facilitation.svg",
      title: "Facilitation",
      description:
        " The complete administration life-cycle including automatically adaptive products."
    },
    {
      avatar: "assets/servicing.svg",
      title: "Servicing",
      description:
        "Flexible client servicing solution to fit your operational model."
    },
    {
      avatar: "assets/insights.svg",
      title: "Insights",
      description:
        "Actionable business intelligence including regulatory reporting."
    }
  ];

  private supService = [
    {
      avatar: "assets/design.svg",
      title: "Design",
      description:
        " Work with distribution to define scalable products with conduct risk in mind."
    },
    {
      avatar: "assets/configuration.svg",
      title: "Configuration",
      description:
        " Quickly build a range of products from their core constituent parts."
    },
    {
      avatar: "assets/testing.svg",
      title: "Testing & Deployment",
      description:
        " Robust Auto-testing framework & managed sign off process across multiple products and distribution partners."
    },
    {
      avatar: "assets/facilitation.svg",
      title: "Facilitation",
      description:
        " End-to-end administration including the full payments and servicing life-cycle."
    },

    {
      avatar: "assets/insights.svg",
      title: "Insights",
      description:
        "Configurable reporting & business intelligence suite including conduct dashboard."
    }
  ];

  private partnerList = [
    "assets/partner1.png",
    "assets/partner2.png",
    "assets/partner3.png",
    "assets/partner4.jpg",
    "assets/partner5.png",
    "assets/partner6.png",
    "assets/partner7.png",
    "assets/partner8.jpg",
    "assets/partner9.jpg",
    "assets/partner10.jpg"
  ];
  constructor() { }
  
  getDistributorProposition() {
    return this.distributorProp;
  }
  getDistributorService() {
    return this.distService;
  }

  getSupplierProposition() {
    return this.supplierProp;
  }

  getSupplierService() {
    return this.supService;
  }

  getPartner() {
    return this.partnerList;
  }
}
