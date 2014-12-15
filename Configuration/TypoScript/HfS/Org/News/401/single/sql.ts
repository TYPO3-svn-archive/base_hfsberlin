plugin.tx_browser_pi1 {
  views {
    single {
      401 {
        select (
          tx_org_news.title,
          tx_org_news.crdate,
          tx_org_news.deleted,
          tx_org_news.bodytext,
          tx_org_news.datetime,
          tx_org_news.image,
          tx_org_news.imagecaption,
          tx_org_news.imagecols,
          tx_org_news.imageorient,
          tx_org_news.imageseo,
          tx_org_news.page,
          tx_org_news.seo_description,
          tx_org_news.seo_keywords,
          tx_org_news.subtitle,
          tx_org_news.teaser_title,
          tx_org_news.teaser_short,
          tx_org_news.teaser_subtitle,
          tx_org_news.type,
          tx_org_news.uid,
          tx_org_news.url
        )
        orderBy (
          tx_org_news.title
        )
      }
    }
  }
}