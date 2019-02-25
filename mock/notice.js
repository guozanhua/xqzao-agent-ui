import { delay } from 'roadhog-api-doc';

const proxy = {
  'GET /api/blade-desk/notice/list': {
    code: 200,
    data: {
      total: 15,
      size: 10,
      current: 1,
      searchCount: true,
      pages: 2,
      records: [
        {
          id: '1',
          title: '博客标题1',
          categoryName: '批转通知',
          content: '博客内容1',
          date: '2018-05-08 12:00:00',
        },
        {
          id: '2',
          title: '博客标题2',
          categoryName: '发布通知',
          content: '博客内容2',
          date: '2018-06-08 12:00:00',
        },
        {
          id: '3',
          title: '博客标题3',
          categoryName: '任免通知',
          content: '博客内容3',
          date: '2018-07-08 12:00:00',
        },
        {
          id: '4',
          title: '博客标题4',
          categoryName: '指示通知',
          content: '博客内容4',
          date: '2018-08-08 12:00:00',
        },
        {
          id: '5',
          title: '博客标题5',
          categoryName: '转发通知',
          content: '博客内容5',
          date: '2018-09-08 12:00:00',
        },
        {
          id: '6',
          title: '博客标题1',
          categoryName: '批转通知',
          content: '博客内容1',
          date: '2018-05-08 12:00:00',
        },
        {
          id: '7',
          title: '博客标题2',
          categoryName: '发布通知',
          content: '博客内容2',
          date: '2018-06-08 12:00:00',
        },
        {
          id: '8',
          title: '博客标题3',
          categoryName: '任免通知',
          content: '博客内容3',
          date: '2018-07-08 12:00:00',
        },
        {
          id: '9',
          title: '博客标题4',
          categoryName: '指示通知',
          content: '博客内容4',
          date: '2018-08-08 12:00:00',
        },
        {
          id: '10',
          title: '博客标题5',
          categoryName: '转发通知',
          content: '博客内容5',
          date: '2018-09-08 12:00:00',
        },
        {
          id: '11',
          title: '博客标题1',
          categoryName: '批转通知',
          content: '博客内容1',
          date: '2018-05-08 12:00:00',
        },
        {
          id: '12',
          title: '博客标题2',
          categoryName: '发布通知',
          content: '博客内容2',
          date: '2018-06-08 12:00:00',
        },
        {
          id: '13',
          title: '博客标题3',
          categoryName: '任免通知',
          content: '博客内容3',
          date: '2018-07-08 12:00:00',
        },
        {
          id: '14',
          title: '博客标题4',
          categoryName: '指示通知',
          content: '博客内容4',
          date: '2018-08-08 12:00:00',
        },
        {
          id: '15',
          title: '博客标题5',
          categoryName: '转发通知',
          content: '博客内容5',
          date: '2018-09-08 12:00:00',
        },
      ],
    },
    message: 'success',
    success: true,
  },
  'POST /api/blade-desk/notice/submit': {
    code: 200,
    data: {},
    message: 'success',
    success: true,
  },
  'POST /api/blade-desk/notice/remove': {
    code: 200,
    data: {},
    message: 'success',
    success: true,
  },
  'GET /api/blade-desk/notice/detail': {
    code: 200,
    data: {
      title: '通知标题详情',
      category: '3',
      categoryName: '转发通知',
      date: '2018-12-31 23:33:33',
      content: '通知公告内容详情',
    },
    message: 'success',
    success: true,
  },
};

export default delay(proxy, 500);
