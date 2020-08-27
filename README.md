# yonsei.exchange

[![Netlify Status](https://api.netlify.com/api/v1/badges/c2c235f1-dbde-4a20-a5df-48b183c98f9b/deploy-status)](https://app.netlify.com/sites/frosty-almeida-dbdee0/deploys)

Website for Yonsei University Exchange Program Reviews.
2020년 8월 기준 총 11200여 건의 해외 교환 생활 리뷰 텍스트 데이터를 요약 정리한 웹사이트. 교환 후기 데이터는 연세대 학생들이 해외 교환 대학에서 복귀한 직후 의무적으로 작성한 후기임. 


[🛤 yonsei.exchange Website Demo](https://yonsei-exchange.netlify.app/)

[📊 Text Data Analysis Method](https://github.com/snoop2head/yonsei-exchange-program)

- [x] Analyzing Sentiments for Universities: 각 해외 교환 대학 별 만족도 예측
- [x] Extracting Keywords from Reviews of Universities: 각 해외 교환 대학 별 키워드 추출 
- [x] Summarizing Reviews for Universities: 각 해외 교환 대학 별 후기 요약
- [ ] Clustering Universities with their Provided Majors: 각 해외 교환 대학 별 학과 분포 분석 및 군집화


## Guide for Customization

* [gatsby-meta-config.js](./gatsby-meta-config.js): blog meta data such as title, keywords etc.
* [contents](./contents)
  * [__about](./contents/about): writing about portfolio
  * [assets](./contents/assets): profile image and profile image above it
  * [blog](./contents/blog): blog writings in Markdown file format

## Gatsby Template Reference

* [gatsby-starter-bee](https://github.com/JaeYeopHan/gatsby-starter-bee)

