{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red19\green118\blue70;\red15\green112\blue1;\red191\green28\blue37;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c3529\c52549\c34510;\cssrgb\c0\c50196\c0;\cssrgb\c80392\c19216\c19216;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4 , \{ useState, useEffect \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Card\cf0 \strokec4 , \cf5 \strokec5 CardContent\cf0 \strokec4 , \cf5 \strokec5 CardHeader\cf0 \strokec4 , \cf5 \strokec5 CardTitle\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Badge\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/badge"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Heart\cf0 \strokec4 , \cf5 \strokec5 TrendingUp\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "lucide-react"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion, \cf5 \strokec5 AnimatePresence\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "framer-motion"\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 RealTimeFeed\cf0 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  [mentions, setMentions] = useState([\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf7 \strokec7 1\cf0 \strokec4 ,\cb1 \
\cb3       platform: \cf6 \strokec6 "instagram"\cf0 \strokec4 ,\cb1 \
\cb3       author: \cf6 \strokec6 "@tehran_lover"\cf0 \strokec4 ,\cb1 \
\cb3       content: \cf6 \strokec6 "\uc0\u1593 \u1575 \u1588 \u1602  \u1662 \u1585 \u1608 \u1688 \u1607 \u8204 \u1607 \u1575 \u1740  \u1580 \u1583 \u1740 \u1583  \u1588 \u1607 \u1585 \u1583 \u1575 \u1585 \u1740  \u1578 \u1607 \u1585 \u1575 \u1606  \u1607 \u1587 \u1578 \u1605 ! #\u1578 \u1607 \u1585 \u1575 \u1606 _\u1583 \u1608 \u1587 \u1578 _\u1583 \u1575 \u1588 \u1578 \u1606 \u1740 "\cf0 \strokec4 ,\cb1 \
\cb3       sentiment: \cf6 \strokec6 "positive"\cf0 \strokec4 ,\cb1 \
\cb3       time: \cf6 \strokec6 "\uc0\u1575 \u1604 \u1575 \u1606 "\cf0 \strokec4 ,\cb1 \
\cb3       engagement: \cf7 \strokec7 45\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf7 \strokec7 2\cf0 \strokec4 ,\cb1 \
\cb3       platform: \cf6 \strokec6 "x_twitter"\cf0 \strokec4 , \cb1 \
\cb3       author: \cf6 \strokec6 "@citizen_tehran"\cf0 \strokec4 ,\cb1 \
\cb3       content: \cf6 \strokec6 "\uc0\u1582 \u1583 \u1605 \u1575 \u1578  \u1588 \u1607 \u1585 \u1740  \u1576 \u1607 \u1578 \u1585  \u1588 \u1583 \u1607 \u1548  \u1605 \u1605 \u1606 \u1608 \u1606  \u1575 \u1586  \u1578 \u1604 \u1575 \u1588 \u8204 \u1607 \u1575 \u1578 \u1608 \u1606 "\cf0 \strokec4 ,\cb1 \
\cb3       sentiment: \cf6 \strokec6 "positive"\cf0 \strokec4 ,\cb1 \
\cb3       time: \cf6 \strokec6 "2 \uc0\u1583 \u1602 \u1740 \u1602 \u1607  \u1662 \u1740 \u1588 "\cf0 \strokec4 ,\cb1 \
\cb3       engagement: \cf7 \strokec7 23\cf0 \cb1 \strokec4 \
\cb3     \},\cb1 \
\cb3     \{\cb1 \
\cb3       id: \cf7 \strokec7 3\cf0 \strokec4 ,\cb1 \
\cb3       platform: \cf6 \strokec6 "linkedin"\cf0 \strokec4 ,\cb1 \
\cb3       author: \cf6 \strokec6 "\uc0\u1593 \u1604 \u1740  \u1575 \u1581 \u1605 \u1583 \u1740 "\cf0 \strokec4 ,\cb1 \
\cb3       content: \cf6 \strokec6 "\uc0\u1711 \u1586 \u1575 \u1585 \u1588  \u1593 \u1605 \u1604 \u1705 \u1585 \u1583  \u1588 \u1607 \u1585 \u1583 \u1575 \u1585 \u1740  \u1578 \u1607 \u1585 \u1575 \u1606  \u1583 \u1585  \u1581 \u1608 \u1586 \u1607  \u1605 \u1581 \u1740 \u1591  \u1586 \u1740 \u1587 \u1578  \u1602 \u1575 \u1576 \u1604  \u1578 \u1602 \u1583 \u1740 \u1585  \u1575 \u1587 \u1578 "\cf0 \strokec4 ,\cb1 \
\cb3       sentiment: \cf6 \strokec6 "positive"\cf0 \strokec4 , \cb1 \
\cb3       time: \cf6 \strokec6 "5 \uc0\u1583 \u1602 \u1740 \u1602 \u1607  \u1662 \u1740 \u1588 "\cf0 \strokec4 ,\cb1 \
\cb3       engagement: \cf7 \strokec7 67\cf0 \cb1 \strokec4 \
\cb3     \}\cb1 \
\cb3   ]);\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  platformIcons = \{\cb1 \
\cb3     instagram: \cf6 \strokec6 "\uc0\u55357 \u56567 "\cf0 \strokec4 ,\cb1 \
\cb3     x_twitter: \cf6 \strokec6 "\uc0\u55357 \u56358 "\cf0 \strokec4 , \cb1 \
\cb3     linkedin: \cf6 \strokec6 "\uc0\u55357 \u56508 "\cf0 \strokec4 ,\cb1 \
\cb3     telegram: \cf6 \strokec6 "\uc0\u9992 \u65039 "\cf0 \cb1 \strokec4 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  sentimentColors = \{\cb1 \
\cb3     positive: \cf6 \strokec6 "bg-green-100 text-green-800 border-green-200"\cf0 \strokec4 ,\cb1 \
\cb3     negative: \cf6 \strokec6 "bg-red-100 text-red-800 border-red-200"\cf0 \strokec4 ,\cb1 \
\cb3     neutral: \cf6 \strokec6 "bg-gray-100 text-gray-800 border-gray-200"\cf0 \cb1 \strokec4 \
\cb3   \};\cb1 \
\
\cb3   \cf2 \strokec2 const\cf0 \strokec4  sentimentLabels = \{\cb1 \
\cb3     positive: \cf6 \strokec6 "\uc0\u1605 \u1579 \u1576 \u1578 "\cf0 \strokec4 ,\cb1 \
\cb3     negative: \cf6 \strokec6 "\uc0\u1605 \u1606 \u1601 \u1740 "\cf0 \strokec4 , \cb1 \
\cb3     neutral: \cf6 \strokec6 "\uc0\u1582 \u1606 \u1579 \u1740 "\cf0 \cb1 \strokec4 \
\cb3   \};\cb1 \
\
\cb3   \cf8 \strokec8 // Simulate real-time updates\cf0 \cb1 \strokec4 \
\cb3   useEffect(() => \{\cb1 \
\cb3     \cf2 \strokec2 const\cf0 \strokec4  interval = setInterval(() => \{\cb1 \
\cb3       \cf2 \strokec2 const\cf0 \strokec4  newMention = \{\cb1 \
\cb3         id: \cf5 \strokec5 Date\cf0 \strokec4 .now(),\cb1 \
\cb3         platform: [\cf6 \strokec6 "instagram"\cf0 \strokec4 , \cf6 \strokec6 "x_twitter"\cf0 \strokec4 , \cf6 \strokec6 "linkedin"\cf0 \strokec4 , \cf6 \strokec6 "telegram"\cf0 \strokec4 ][\cf5 \strokec5 Math\cf0 \strokec4 .floor(\cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 4\cf0 \strokec4 )],\cb1 \
\cb3         author: [\cf6 \strokec6 "@user"\cf0 \strokec4  + \cf5 \strokec5 Math\cf0 \strokec4 .floor(\cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 1000\cf0 \strokec4 ), \cf6 \strokec6 "\uc0\u1705 \u1575 \u1585 \u1576 \u1585  \u1578 \u1607 \u1585 \u1575 \u1606 \u1740 "\cf0 \strokec4 , \cf6 \strokec6 "@tehran_fan"\cf0 \strokec4 ][\cf5 \strokec5 Math\cf0 \strokec4 .floor(\cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 3\cf0 \strokec4 )],\cb1 \
\cb3         content: [\cb1 \
\cb3           \cf6 \strokec6 "\uc0\u1587 \u1585 \u1608 \u1740 \u1587 \u8204 \u1607 \u1575 \u1740  \u1588 \u1607 \u1585 \u1740  \u1593 \u1575 \u1604 \u1740  \u1588 \u1583 \u1607 !"\cf0 \strokec4 ,\cb1 \
\cb3           \cf6 \strokec6 "\uc0\u1578 \u1607 \u1585 \u1575 \u1606  \u1583 \u1575 \u1585 \u1607  \u1576 \u1607 \u1578 \u1585  \u1605 \u1740 \u1588 \u1607  \u1585 \u1608 \u1586  \u1576 \u1607  \u1585 \u1608 \u1586 "\cf0 \strokec4 ,\cb1 \
\cb3           \cf6 \strokec6 "\uc0\u1605 \u1605 \u1606 \u1608 \u1606  \u1575 \u1586  \u1582 \u1583 \u1605 \u1575 \u1578  \u1582 \u1608 \u1576  \u1588 \u1607 \u1585 \u1583 \u1575 \u1585 \u1740 "\cf0 \strokec4 ,\cb1 \
\cb3           \cf6 \strokec6 "\uc0\u1662 \u1585 \u1608 \u1688 \u1607 \u8204 \u1607 \u1575 \u1740  \u1580 \u1583 \u1740 \u1583  \u1601 \u1608 \u1602 \u8204 \u1575 \u1604 \u1593 \u1575 \u1583 \u1606 "\cf0 \cb1 \strokec4 \
\cb3         ][\cf5 \strokec5 Math\cf0 \strokec4 .floor(\cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 4\cf0 \strokec4 )],\cb1 \
\cb3         sentiment: [\cf6 \strokec6 "positive"\cf0 \strokec4 , \cf6 \strokec6 "positive"\cf0 \strokec4 , \cf6 \strokec6 "positive"\cf0 \strokec4 , \cf6 \strokec6 "neutral"\cf0 \strokec4 , \cf6 \strokec6 "negative"\cf0 \strokec4 ][\cf5 \strokec5 Math\cf0 \strokec4 .floor(\cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 5\cf0 \strokec4 )],\cb1 \
\cb3         time: \cf6 \strokec6 "\uc0\u1575 \u1604 \u1575 \u1606 "\cf0 \strokec4 ,\cb1 \
\cb3         engagement: \cf5 \strokec5 Math\cf0 \strokec4 .floor(\cf5 \strokec5 Math\cf0 \strokec4 .random() * \cf7 \strokec7 100\cf0 \strokec4 ) + \cf7 \strokec7 10\cf0 \cb1 \strokec4 \
\cb3       \};\cb1 \
\
\cb3       setMentions(prev => [newMention, ...prev.slice(\cf7 \strokec7 0\cf0 \strokec4 , \cf7 \strokec7 9\cf0 \strokec4 )]);\cb1 \
\cb3     \}, \cf7 \strokec7 10000\cf0 \strokec4 ); \cf8 \strokec8 // Every 10 seconds\cf0 \cb1 \strokec4 \
\
\cb3     \cf2 \strokec2 return\cf0 \strokec4  () => clearInterval(interval);\cb1 \
\cb3   \}, []);\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <\cf5 \strokec5 Card\cf0 \strokec4  className=\cf6 \strokec6 "glass-effect h-96 overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3       <\cf5 \strokec5 CardHeader\cf0 \strokec4  className=\cf6 \strokec6 "pb-4 border-b border-gray-100"\cf0 \strokec4 >\cb1 \
\cb3         <\cf5 \strokec5 CardTitle\cf0 \strokec4  className=\cf6 \strokec6 "text-lg font-bold text-gray-900 flex items-center gap-2"\cf0 \strokec4 >\cb1 \
\cb3           <div className=\cf6 \strokec6 "w-3 h-3 bg-green-500 rounded-full animate-pulse"\cf0 \strokec4 ></div>\cb1 \
\cb3           \cf9 \strokec9 \uc0\u1601 \u1740 \u1583 \cf0 \strokec4  \cf9 \strokec9 \uc0\u1586 \u1606 \u1583 \u1607 \cf0 \strokec4  \cf9 \strokec9 \uc0\u1575 \u1588 \u1575 \u1585 \u1607 \u8204 \u1607 \u1575 \cf0 \cb1 \strokec4 \
\cb3           <\cf5 \strokec5 TrendingUp\cf0 \strokec4  className=\cf6 \strokec6 "w-5 h-5 text-green-500 mr-auto"\cf0 \strokec4  />\cb1 \
\cb3         </\cf5 \strokec5 CardTitle\cf0 \strokec4 >\cb1 \
\cb3       </\cf5 \strokec5 CardHeader\cf0 \strokec4 >\cb1 \
\cb3       <\cf5 \strokec5 CardContent\cf0 \strokec4  className=\cf6 \strokec6 "p-0 overflow-y-auto h-80"\cf0 \strokec4 >\cb1 \
\cb3         <\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3           \{mentions.map((mention) => (\cb1 \
\cb3             <motion.div\cb1 \
\cb3               key=\{mention.id\}\cb1 \
\cb3               initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: -\cf7 \strokec7 20\cf0 \strokec4  \}\}\cb1 \
\cb3               animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , y: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3               exit=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: \cf7 \strokec7 20\cf0 \strokec4  \}\}\cb1 \
\cb3               className=\cf6 \strokec6 "p-4 border-b border-gray-50 hover:bg-gray-25 transition-colors"\cf0 \cb1 \strokec4 \
\cb3             >\cb1 \
\cb3               <div className=\cf6 \strokec6 "flex items-start gap-3"\cf0 \strokec4 >\cb1 \
\cb3                 <div className=\cf6 \strokec6 "text-lg"\cf0 \strokec4 >\{platformIcons[mention.platform]\}</div>\cb1 \
\cb3                 <div className=\cf6 \strokec6 "flex-1 space-y-2"\cf0 \strokec4 >\cb1 \
\cb3                   <div className=\cf6 \strokec6 "flex items-center justify-between"\cf0 \strokec4 >\cb1 \
\cb3                     <span className=\cf6 \strokec6 "font-medium text-gray-900"\cf0 \strokec4 >\{mention.author\}</span>\cb1 \
\cb3                     <span className=\cf6 \strokec6 "text-xs text-gray-500"\cf0 \strokec4 >\{mention.time\}</span>\cb1 \
\cb3                   </div>\cb1 \
\cb3                   <p className=\cf6 \strokec6 "text-sm text-gray-700 leading-relaxed"\cf0 \strokec4 >\{mention.content\}</p>\cb1 \
\cb3                   <div className=\cf6 \strokec6 "flex items-center justify-between"\cf0 \strokec4 >\cb1 \
\cb3                     <\cf5 \strokec5 Badge\cf0 \strokec4  className=\{\cf6 \strokec6 `text-xs \cf0 \strokec4 $\{sentimentColors[mention.sentiment]\}\cf6 \strokec6  border`\cf0 \strokec4 \}>\cb1 \
\cb3                       \{sentimentLabels[mention.sentiment]\}\cb1 \
\cb3                     </\cf5 \strokec5 Badge\cf0 \strokec4 >\cb1 \
\cb3                     <div className=\cf6 \strokec6 "flex items-center gap-1 text-xs text-gray-500"\cf0 \strokec4 >\cb1 \
\cb3                       <\cf5 \strokec5 Heart\cf0 \strokec4  className=\cf6 \strokec6 "w-3 h-3"\cf0 \strokec4  />\cb1 \
\cb3                       \{mention.engagement\}\cb1 \
\cb3                     </div>\cb1 \
\cb3                   </div>\cb1 \
\cb3                 </div>\cb1 \
\cb3               </div>\cb1 \
\cb3             </motion.div>\cb1 \
\cb3           ))\}\cb1 \
\cb3         </\cf5 \strokec5 AnimatePresence\cf0 \strokec4 >\cb1 \
\cb3       </\cf5 \strokec5 CardContent\cf0 \strokec4 >\cb1 \
\cb3     </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}