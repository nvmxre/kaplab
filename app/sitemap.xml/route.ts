import { format } from "date-fns";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const BASE_URL = "https://www.drops-lab.ru";

const staticPaths = [
    "",
    "/doctors",
    "/about",
    "/promotions",
    "/contacts",
    "/services",
    "/faq",
    "/services/iv-drips",
    "/services/programs",
    "/services/diagnostics",
];

const programSlugs = [
    "super",
    "zhenskoe-zdorovie",
    "muzhskoe-zdorovie",
    "milanskiy-kokteyl",
    "protein-optimization",
    "omolozhenie-iznutri",
    "metabolicheskiy-start",
    "krasota-i-uprugost-kozhi",
    "semeynoe-schastie",
];

const dripSlugs = [
    "collagen",
    "quick-recovery",
    "dlya-volos-i-nogtei",
    "cinderella",
    "cinderella-lux",
    "energy",
    "home-recovery",
    "protiv-stressa",
    "protiv-allergiyi",
    "vospolnenie-belka",
    "protiv-pohmelya",
    "detox",
    "ukreplenie-zdorovia",
    "vinoslivost-k-nagruzkam",
    "protiv-gerpesa",
    "protiv-prostudy",
    "stop-migren",
    "energizer",
    "activnost-mozga",
    "glutation",
    "laennek",
    "uhod-za-kozhey",
    "uhod-za-volosami",
    "barbi",
    "barhatnaya-kozha",
    "oktolipen",
    "tioktovaya-kislota",
    "panangin",
    "riboksin",
    "gemodez",
    "tsiprofloksatsin",
    "mildronat",
    "ceraxon",
    "remaxol",
    "berlition",
    "dexametazon",
    "citoflavin",
    "reamberin",
];

export async function GET() {
    const lastmod = format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx");

    const urls = [
        ...staticPaths.map(path => ({
            loc: `${BASE_URL}${path}`,
            priority: "1.0",
        })),
        ...programSlugs.map(slug => ({
            loc: `${BASE_URL}/services/programs/${slug}`,
            priority: "0.6",
        })),
        ...dripSlugs.map(slug => ({
            loc: `${BASE_URL}/services/iv-drips/${slug}`,
            priority: "0.6",
        })),
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
        .map(
            url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${url.priority}</priority>
  </url>`
        )
        .join("")}
</urlset>`;

    return new NextResponse(sitemap, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
