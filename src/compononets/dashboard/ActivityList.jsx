{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red19\green118\blue70;\red191\green28\blue37;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c3529\c52549\c34510;\cssrgb\c80392\c19216\c19216;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Card\cf0 \strokec4 , \cf5 \strokec5 CardContent\cf0 \strokec4 , \cf5 \strokec5 CardHeader\cf0 \strokec4 , \cf5 \strokec5 CardTitle\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Button\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/button"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Instagram\cf0 \strokec4 , \cf5 \strokec5 Zap\cf0 \strokec4 , \cf5 \strokec5 Globe\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "lucide-react"\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 const\cf0 \strokec4  activities = [\cb1 \
\cb3     \{ icon: \cf5 \strokec5 Instagram\cf0 \strokec4 , app: \cf6 \strokec6 "\uc0\u1575 \u1740 \u1606 \u1587 \u1578 \u1575 \u1711 \u1585 \u1575 \u1605 "\cf0 \strokec4 , type: \cf6 \strokec6 "\uc0\u1588 \u1576 \u1705 \u1607  \u1575 \u1580 \u1578 \u1605 \u1575 \u1593 \u1740 "\cf0 \strokec4 , rate: \cf7 \strokec7 85\cf0 \strokec4 , report: \cf6 \strokec6 "1,450,000 \uc0\u1578 \u1608 \u1605 \u1575 \u1606 "\cf0 \strokec4  \},\cb1 \
\cb3     \{ icon: \cf5 \strokec5 Globe\cf0 \strokec4 , app: \cf6 \strokec6 "\uc0\u1711 \u1608 \u1711 \u1604  \u1575 \u1583 \u1586 "\cf0 \strokec4 , type: \cf6 \strokec6 "\uc0\u1578 \u1576 \u1604 \u1740 \u1594 \u1575 \u1578 "\cf0 \strokec4 , rate: \cf7 \strokec7 60\cf0 \strokec4 , report: \cf6 \strokec6 "2,300,000 \uc0\u1578 \u1608 \u1605 \u1575 \u1606 "\cf0 \strokec4  \},\cb1 \
\cb3     \{ icon: \cf5 \strokec5 Zap\cf0 \strokec4 , app: \cf6 \strokec6 "\uc0\u1705 \u1605 \u1662 \u1740 \u1606  \u1662 \u1740 \u1575 \u1605 \u1705 \u1740 "\cf0 \strokec4 , type: \cf6 \strokec6 "\uc0\u1576 \u1575 \u1586 \u1575 \u1585 \u1740 \u1575 \u1576 \u1740 "\cf0 \strokec4 , rate: \cf7 \strokec7 92\cf0 \strokec4 , report: \cf6 \strokec6 "850,000 \uc0\u1578 \u1608 \u1605 \u1575 \u1606 "\cf0 \strokec4  \},\cb1 \
\cb3 ];\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 ActivityList\cf0 \strokec4 () \{\cb1 \
\cb3     \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3         <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "bg-white shadow-sm rounded-2xl"\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 CardHeader\cf0 \strokec4  className=\cf6 \strokec6 "flex flex-row items-center justify-between"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 CardTitle\cf0 \strokec4  className=\cf6 \strokec6 "text-lg font-bold"\cf0 \strokec4 >\cf8 \strokec8 \uc0\u1570 \u1582 \u1585 \u1740 \u1606 \cf0 \strokec4  \cf8 \strokec8 \uc0\u1601 \u1593 \u1575 \u1604 \u1740 \u1578 \u8204 \u1607 \u1575 \cf0 \strokec4 </\cf5 \strokec5 CardTitle\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 Button\cf0 \strokec4  variant=\cf6 \strokec6 "link"\cf0 \strokec4  className=\cf6 \strokec6 "text-sm"\cf0 \strokec4 >\cf8 \strokec8 \uc0\u1605 \u1588 \u1575 \u1607 \u1583 \u1607 \cf0 \strokec4  \cf8 \strokec8 \uc0\u1607 \u1605 \u1607 \cf0 \strokec4 </\cf5 \strokec5 Button\cf0 \strokec4 >\cb1 \
\cb3             </\cf5 \strokec5 CardHeader\cf0 \strokec4 >\cb1 \
\cb3             <\cf5 \strokec5 CardContent\cf0 \strokec4 >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "space-y-4"\cf0 \strokec4 >\cb1 \
\cb3                     <div className=\cf6 \strokec6 "grid grid-cols-4 text-xs font-semibold text-gray-500 px-4"\cf0 \strokec4 >\cb1 \
\cb3                         <span>\cf8 \strokec8 \uc0\u1575 \u1662 \u1604 \u1740 \u1705 \u1740 \u1588 \u1606 \cf0 \strokec4 </span>\cb1 \
\cb3                         <span>\cf8 \strokec8 \uc0\u1606 \u1608 \u1593 \cf0 \strokec4 </span>\cb1 \
\cb3                         <span>\cf8 \strokec8 \uc0\u1606 \u1585 \u1582 \cf0 \strokec4  \cf8 \strokec8 \uc0\u1605 \u1608 \u1601 \u1602 \u1740 \u1578 \cf0 \strokec4 </span>\cb1 \
\cb3                         <span>\cf8 \strokec8 \uc0\u1711 \u1586 \u1575 \u1585 \u1588 \cf0 \strokec4 </span>\cb1 \
\cb3                     </div>\cb1 \
\cb3                     \{activities.map((activity, index) => (\cb1 \
\cb3                         <div key=\{index\} className=\cf6 \strokec6 "grid grid-cols-4 items-center p-3 hover:bg-gray-50 rounded-lg"\cf0 \strokec4 >\cb1 \
\cb3                             <div className=\cf6 \strokec6 "flex items-center gap-3 font-semibold"\cf0 \strokec4 >\cb1 \
\cb3                                 <div className=\cf6 \strokec6 "p-2 bg-gray-100 rounded-lg"\cf0 \strokec4 >\cb1 \
\cb3                                     <activity.icon className=\cf6 \strokec6 "w-5 h-5 text-gray-600"\cf0 \strokec4  />\cb1 \
\cb3                                 </div>\cb1 \
\cb3                                 \{activity.app\}\cb1 \
\cb3                             </div>\cb1 \
\cb3                             <span className=\cf6 \strokec6 "text-sm text-gray-600"\cf0 \strokec4 >\{activity.type\}</span>\cb1 \
\cb3                             <div className=\cf6 \strokec6 "text-sm text-gray-600"\cf0 \strokec4 >\cb1 \
\cb3                                 <div className=\cf6 \strokec6 "w-full bg-gray-200 rounded-full h-1.5"\cf0 \strokec4 >\cb1 \
\cb3                                     <div \cb1 \
\cb3                                         className=\cf6 \strokec6 "bg-green-500 h-1.5 rounded-full"\cf0 \strokec4  \cb1 \
\cb3                                         style=\{\{ width: \cf6 \strokec6 `\cf0 \strokec4 $\{activity.rate\}\cf6 \strokec6 %`\cf0 \strokec4  \}\}\cb1 \
\cb3                                     ></div>\cb1 \
\cb3                                 </div>\cb1 \
\cb3                             </div>\cb1 \
\cb3                             <span className=\cf6 \strokec6 "font-semibold text-right pl-4"\cf0 \strokec4 >\{activity.report\}</span>\cb1 \
\cb3                         </div>\cb1 \
\cb3                     ))\}\cb1 \
\cb3                 </div>\cb1 \
\cb3             </\cf5 \strokec5 CardContent\cf0 \strokec4 >\cb1 \
\cb3         </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3     );\cb1 \
\cb3 \}\cb1 \
}