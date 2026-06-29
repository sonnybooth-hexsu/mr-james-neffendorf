/**
 * Centralised schema.org / JSON-LD structured data for SEO.
 *
 * Every value here is sourced from existing on-page content (about, contact,
 * homepage "Professional affiliations" section and footer); nothing is
 * invented. Update these alongside the visible copy so the markup stays honest.
 */

const SITE_URL = 'https://mrjamesneffendorf.com'

const PERSON_ID = `${SITE_URL}/#james-neffendorf`
const WEBSITE_ID = `${SITE_URL}/#website`

// Clinics where Mr Neffendorf consults (see src/pages/contact.js).
const workLocations = [
  {
    '@type': 'MedicalClinic',
    name: 'The London Clinic Eye Centre',
    url: 'https://www.thelondonclinic.co.uk/',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '119 Harley Street',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
  },
  {
    '@type': 'MedicalClinic',
    name: "King's College Hospital, Guthrie Wing (Private)",
    url: 'https://www.kch.nhs.uk/',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Guthrie Wing, Denmark Hill',
      addressLocality: 'London',
      postalCode: 'SE5 9RS',
      addressCountry: 'GB',
    },
  },
  {
    '@type': 'MedicalClinic',
    name: 'London Lauriston Clinic',
    url: 'https://www.llclinics.co.uk/',
  },
]

// "Professional affiliations" section on the homepage (src/pages/index.js).
const affiliations = [
  { '@type': 'Organization', name: 'Royal College of Ophthalmologists', url: 'https://www.rcophth.ac.uk/' },
  { '@type': 'Organization', name: 'Euretina', url: 'https://euretina.org/' },
  { '@type': 'Organization', name: 'American Academy of Ophthalmology', url: 'https://www.aao.org' },
  { '@type': 'Organization', name: 'European Society of Cataract and Refractive Surgeons (ESCRS)', url: 'https://www.escrs.org' },
  { '@type': 'Organization', name: 'British and Eire Association of Vitreoretinal Surgeons (BEAVRS)', url: 'https://www.beavrs.org' },
  { '@type': 'Organization', name: 'CMAC', url: 'https://www.cmac.world/' },
]

const personSchema = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Mr James Neffendorf',
  alternateName: 'Mr James E. Neffendorf',
  honorificSuffix: 'MA (Cantab) MBBS (Lond) MD (Res) FRCOphth',
  jobTitle: 'Consultant Ophthalmic and Vitreoretinal Surgeon',
  description:
    'London-based consultant ophthalmologist and vitreoretinal surgeon specialising in cataract surgery and retinal surgery.',
  url: SITE_URL,
  image: `${SITE_URL}/james-neffendorf.jpg`,
  email: 'clinic@mrjamesneffendorf.com',
  knowsAbout: [
    'Cataract surgery',
    'Vitreoretinal surgery',
    'Retinal detachment',
    'Age-related macular degeneration',
    'Diabetic retinopathy',
    'Macular holes',
    'Epiretinal membrane',
    'Floaters',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Cambridge',
  },
  affiliation: affiliations,
  worksFor: workLocations,
  workLocation: workLocations,
  sameAs: [
    'https://www.doctify.com/uk/specialist/james-neffendorf',
    'https://www.linkedin.com/in/james-neffendorf-0b601a90/',
    'https://www.topdoctors.co.uk/doctor/james-neffendorf',
  ],
}

const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: 'Mr James Neffendorf',
  description:
    'Consultant ophthalmologist and vitreoretinal surgeon in London, specialising in cataract and retinal surgery.',
  inLanguage: 'en-GB',
  publisher: { '@id': PERSON_ID },
}

/**
 * Site-wide graph injected on every page (via Layout). Establishes the doctor
 * and the website as linked entities for search engines / knowledge panels.
 */
const globalGraph = {
  '@context': 'https://schema.org',
  '@graph': [personSchema, websiteSchema],
}

const titleCase = (slug) =>
  slug
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

/**
 * Derive a BreadcrumbList from the current pathname.
 * Returns null on the homepage (a single-item breadcrumb adds no value).
 */
const buildBreadcrumbList = (pathname = '/') => {
  const clean = pathname.replace(/^\/+|\/+$/g, '')
  if (!clean) return null

  const segments = clean.split('/')
  const itemListElement = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
  ]

  let acc = ''
  segments.forEach((segment, index) => {
    acc += `/${segment}`
    itemListElement.push({
      '@type': 'ListItem',
      position: index + 2,
      name: titleCase(decodeURIComponent(segment)),
      item: `${SITE_URL}${acc}/`,
    })
  })

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement,
  }
}

const toAbsoluteUrl = (url) => {
  if (!url) return undefined
  if (url.startsWith('//')) return `https:${url}`
  if (url.startsWith('http')) return url
  return `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`
}

/** Article (BlogPosting) schema for an individual blog post. */
const buildBlogPostingSchema = (post, pathname) => {
  if (!post) return null
  const url = `${SITE_URL}${pathname}`
  const image = toAbsoluteUrl(post.banner && post.banner.url)

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.heading,
    ...(image ? { image: [image] } : {}),
    ...(post.authDate ? { datePublished: post.authDate, dateModified: post.authDate } : {}),
    author: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: post.author || 'Mr James Neffendorf',
    },
    publisher: { '@id': PERSON_ID },
    ...(post.category ? { articleSection: post.category } : {}),
    ...(post.metaDescription ? { description: post.metaDescription } : {}),
  }
}

const stripHtml = (html = '') =>
  String(html)
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;|&rsquo;|&lsquo;|&apos;/g, "'")
    .replace(/&quot;|&ldquo;|&rdquo;/g, '"')
    .replace(/\s+/g, ' ')
    .trim()

/** FAQPage schema from a CMS accordion (faqs.items: { title, content }). */
const buildFaqPageSchema = (items) => {
  if (!items || !items.length) return null

  const mainEntity = items
    .map(({ title, content }) => ({
      '@type': 'Question',
      name: stripHtml(title),
      acceptedAnswer: { '@type': 'Answer', text: stripHtml(content) },
    }))
    .filter((q) => q.name && q.acceptedAnswer.text)

  if (!mainEntity.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity,
  }
}

export {
  SITE_URL,
  globalGraph,
  buildBreadcrumbList,
  buildBlogPostingSchema,
  buildFaqPageSchema,
}
