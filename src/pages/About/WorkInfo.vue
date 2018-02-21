<template>
  <div class="column col-8 col-mx-auto resume-container ">
    <div class="columns">
      <div class="column col-12">
        <div class="h3 resume-container-header" id="work-info">
          工作经历
        </div>
      </div>
      <div class="column col-12">
        <div class="timeline">
          <div class="timeline-item" v-for="(workTimeline, index) in worksTimeline" :keys="index">
            <div class="timeline-left">
              <a class="timeline-icon" v-if="index === 0"></a>
              <a class="timeline-icon icon-lg" v-else>
                <i class="icon icon-check"></i>
              </a>
            </div>
            <div class="timeline-content">
              <!-- tiles structure -->
              <div class="tile">
                <div class="tile-content">
                  <p class="tile-subtitle">{{ workTimeline.range }}</p>
                  <p class="tile-title">{{ workTimeline.company }}</p>
                  <p class="tile-title" v-for="(role, index) in workTimeline.roles" :key="index">
                    <a :href="role.url">{{ role.name }}</a>
                    {{ role.value }}
                  </p>
                </div>
                <div class="tile-action">
                  <div class="popover popover-left">
                    <button class="btn">查看项目经验</button>
                    <div class="popover-container" style="width: 800px;">
                      <div class="card">
                        <div class="card-header">
                          {{ workTimeline.workDetail.header }}
                        </div>
                        <div class="card-body">
                          <div v-for="item in workTimeline.workDetail.content">
                            <h4>{{item.title}}</h4>
                            <h5>{{item['date-range']}}</h5>
                            <p>{{item['project-description']}}</p>
                            <ul>
                              <li v-for="dev_item in item['dev-items']">
                                <em> {{ dev_item.name }} : </em>
                                {{ dev_item.value }}
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div class="card-footer">
                          {{ workTimeline.workDetail.footer }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  let worksTimeline = [
    {
      range: '2016年09月 ~ 至今',
      company: '北京新中商数据科技有限公司上海分公司',
      roles: [
        {
          name: '技术负责',
          value: '负责前后端技术选型 / 以及主要技术的攻坚',
          url: 'http://preiview.dqchina.org'
        },
        {
          name: '项目骨架',
          value: '搭建前后端基本开发骨架',
          url: '#'
        },
        {
          name: '开发流程优化',
          value: '优化局域网自动化不出, 使得前后端提交代码可以自动更新到局域网机器上',
          url: '#'
        },
        {
          name: '日常开发',
          value: '主 Django / djangorestframework / Vue.JS 的开发',
          url: '#'
        }
      ],
      workDetail: {
        header: '项目经验',
        content: [
          {
            'title': '商业地产地理信息可视化平台',
            'date-range': '2016.09 - 至今',
            'project-description': '系统分为工具端和产品端，工具端主要满足咨询顾问部分定制化的 GIS 可视化需求。类似于一个后台系统。产品端主要用于将数据库中的数据全部可视化。用于呈现商业地产角度的城市商圈分析。',
            'dev-items': [
              {
                'name': '开发工具',
                'value': 'PyCharm，MacVim ， PostgreSQL， Navicat Premium，DataGrip，Linux 命令工具',
              },
              {
                'name': '部署工具',
                'value': 'Ansible / Ubuntu Server 16.04 LTS',
              },
              {
                'name': '后端组件',
                'value': 'Nginx 1.10.0 ，PostgreSQL 9.5，Gunicorn，Supervisor， Python 3.5 ，Virtualenv，Django 1.10.6',
              },
            ],
          },
          {
            'title': '商圈类与商场类数据分析与挖掘',
            'date-range': '2017.11 - 2018.06',
            'project-description': '商场整场探针类数据分析,某银行卡消费流水消费挖掘',
            'dev-items': [
              {
                'name': '主要依赖库',
                'value': 'Pandas, numpy',
              },
            ],
          },
        ],
        footer: '优雅的小尾巴 ~~~~'
      }
    },
    {
      range: '2016年03月 ~ 2016年08月',
      company: '上海群师慧互联网科技有限公司',
      roles: [
        {
          name: '数据爬取',
          value: '使用 Python 编写爬虫爬取法律类资讯 清洗入库(MySQL 与 ElasticSearch)',
          url: '#'
        },
        {
          name: '接口开发',
          value: '使用 Java / JFinalORM 编写 ElasticSearch 的 WebAPI',
          url: '#'
        }
      ],
      workDetail: {
        header: '工作内容',
        content: [
          {
            'title': '法律信息类爬虫以及WebAPI构建',
            'date-range': '2016.03 - 2016.08',
            'project-description': '使用 Python 从各类法律类信息进行数据抓取-解析-存储, 并将结果放入 ElasticSearch 中',
            'dev-items': [
              {
                'name': '开发工具',
                'value': 'JFinal, PyCharm/Intellij Idea/MacVim ，Navicat Premium，DataGrip，Linux 命令工具',
              },
              {
                'name': '部署工具',
                'value': 'Shell / Ubuntu Server 16.04 LTS / Windows Server',
              },
              {
                'name': '后端组件',
                'value': 'MySQL , ElasticSearch',
              },
            ],
          },
        ],
        footer: '优雅的小尾巴 ~~~~'
      }
    },
    {
      range: '2015年10月 ~ 2016年02月',
      company: '自由工作者(大学接私活)',
      roles: [
        {
          name: '私活',
          value: '一些二次开发的网站',
          url: '#'
        }
      ],
      workDetail: {
        header: '退化的技能树',
        content: [
          {
            'title': '商业地产地理信息可视化平台',
            'date-range': '2016.09 - 2018.06',
            'project-description': '系统分为工具端和产品端，工具端主要满足咨询顾问部分定制化的 GIS 可视化需求。类似于一个后台系统。产品端主要用于将数据库中的数据全部可视化。用于呈现商业地产角度的城市商圈分析。',
            'dev-items': [
              {
                'name': '开发工具',
                'value': 'PyCharm，MacVim ， PostgreSQL， Navicat Premium，DataGrip，Linux 命令工具',
              },
              {
                'name': '部署工具',
                'value': 'Ansible / Ubuntu Server 16.04 LTS',
              },
              {
                'name': '后端组件',
                'value': 'Nginx 1.10.0 ，PostgreSQL 9.5，Gunicorn，Supervisor， Python 3.5 ，Virtualenv，Django 1.10.6',
              },
            ],
          },
        ],
        footer: '优雅的小尾巴 ~~~~'
      }
    },
    {
      range: '2012年09月 ~ 2016年06月',
      company: '常州大学',
      roles: [
        {
          name: '软件工程',
          value: '其实报了这个专业本身还是自学',
          url: '#'
        },
        {
          name: '常州大学电脑120社团 13届社长',
          value: '嗯, 的确是从组装电脑和修电脑开始进入软件世界的',
          url: '#'
        }
      ],
      workDetail: {
        header: '退化的技能树',
        content: [
          {
            'title': '退化的技能树',
            'date-range': '2012.09 - 2016.06',
            'project-description': '注：很久之前玩过的，虽然不是现在的主力技能但列在这里聊胜有无，至少可以证明自己喜欢技 术，开发经历比较丰富并且学习能力极强',
            'dev-items': [
              {
                'name': 'Java 相关经验',
                'value': '大四实习期 后期维护一个 Android App',
              },
              {
                'name': 'PHP 相关经验(麻蛋,不是拍簧片相关经验)',
                'value': '自由职业部署并维护一个类似于一元购的CMS商城系统',
              },
              {
                'name': 'Ruby 相关经验',
                'value': '业余时间使用过 Ruby On Rails 做过两个毕业时候的课程设计，使用过 Ruby 写过 HTTP 级别爬虫与 Socket 级别爬虫，后者也用 Python 重写了一下。',
              },
              {
                'name': '毕业设计（未开源）',
                'value': 'C# + Django 实现的 Kinect 跨平台（BS/CS）远程控制与视频监控 平台。包含 Kinect 控制 PC 控制端，浏览器远控端，Android 远控端，以及服务端。（关键 词，Kinect、Android、Django、FFMpeg、WPF、AdminLTE）',
              },
              {
                'name': 'Autohotkey (Windows Only)',
                'value': '编写过一套操作方式优化自己的日常操作。',
              },
            ],
          },
        ],
        footer: '优雅的小尾巴 ~~~~'
      }
    }
  ];
  export default {
    name: 'BasicInfo',
    components: {},
    data() {
      return {
        worksTimeline: worksTimeline
      };
    }
  };
</script>
