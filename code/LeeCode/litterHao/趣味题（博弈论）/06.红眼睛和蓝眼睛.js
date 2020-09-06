// 题目：https://mp.weixin.qq.com/s?__biz=MzI2NjI5MzU2Nw==&mid=2247484158&idx=1&sn=18bfd8fde04d27e447a0b8d8aa0ba843&chksm=ea911aaedde693b861bb8d7f897732d97519e10f295fbc3f6ef073773609682ca90b6ee83c54&scene=21#wechat_redirect

/**
 * 红眼睛和蓝眼睛：一个岛上有100个人，其中有5个红眼睛，95个蓝眼睛。
 * 这个岛有三个奇怪的宗教规则。
 * 
 * 1.他们不能照镜子，不能看自己眼睛的颜色。
2.他们不能告诉别人对方的眼睛是什么颜色。
3.一旦有人知道了自己是红眼睛，他就必须在当天夜里自杀。


某天，有个旅行者到了这个岛上。由于不知道这里的规矩，
所以他在和全岛人一起狂欢的时候，不留神就说了一句话：【你们这里有红眼睛的人。】

问题：假设这个岛上的人每天都可以看到其他所有人，
每个人都可以做出缜密的逻辑推理，请问岛上会发生什么？

// https://blog.csdn.net/weixin_34362991/article/details/86336235
// http协议（三）几种数据传输方式
请求方式	method	请求Content-Type	                  数据格式	         后端收到的Content-Type	              能否通过getParameter获取数据	能否通过inputStream获取数据	后端接收类型
XHR	     Get	   未设置	                              url传参	          null	                                   能	                       否	                        键值对
XHR	     Post	   未设置	                              json字符串	      text/plain;charset=UTF-8	               否	                       能	                        字符串
XHR	     Post	   未设置	                              a=1&b=2格式字符串	text/plain;charset=UTF-8	               否	                     能	                         字符串
XHR	     Post	   application/x-www-form-urlencoded	 a=1&b=2格式字符串  application/x-www-form-urlencoded	       能	                       否	                        后端收到key为a和b，值为1和2的键值对
XHR	     Post	   application/x-www-form-urlencoded	 json字符串	        application/x-www-form-urlencoded	      能	                       否	                        后端收到一个key为json数据，值为空的键值对
axios	   Get	   未设置	                              url传参	          null	                                   能	                       否	                        键值对
axios	   Post	   未设置	                              json对象	        application/json;charset=UTF-8	       否	                       能	                        json字符串
axios	   Post	   未设置	                              数组	            application/json;charset=UTF-8	       否	                       能	                        数组字符串
axios	   Post	   未设置	                              a=1&b=2格式字符串	application/x-www-form-urlencoded	      能	                     否	                        键值对
fetch	   Get	   未设置	                              url传参	          null	                                 能	                       否	                        键值对
fetch	   Post	   未设置	                              a=1&b=2格式字符串	text/plain;charset=UTF-8	             否	                        能                        	a=1&b=2字符串
fetch	   Post	   未设置	                              json对象	        text/plain;charset=UTF-8	            否	                       能	                        后端收到[object Object]字符串
fetch	   Post	   application/x-www-form-urlencoded;  a=1&b=2格式字符串	application/x-www-form-urlencoded;
                 charset=UTF-8                                         charset=UTF-8	                       能	                        否	                       键值对
                 	                     
*/