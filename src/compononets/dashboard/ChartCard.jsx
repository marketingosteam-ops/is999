{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red19\green118\blue70;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c3529\c52549\c34510;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 'react'\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Card\cf0 \strokec4 , \cf5 \strokec5 CardContent\cf0 \strokec4 , \cf5 \strokec5 CardHeader\cf0 \strokec4 , \cf5 \strokec5 CardTitle\cf0 \strokec4  \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/card"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ motion \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "framer-motion"\cf0 \strokec4 ;\cb1 \
\
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 ChartCard\cf0 \strokec4 (\{ title, children, className = \cf6 \strokec6 ""\cf0 \strokec4 , headerContent = \cf2 \strokec2 null\cf0 \strokec4  \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <motion.div\cb1 \
\cb3       initial=\{\{ opacity: \cf7 \strokec7 0\cf0 \strokec4 , y: \cf7 \strokec7 30\cf0 \strokec4  \}\}\cb1 \
\cb3       animate=\{\{ opacity: \cf7 \strokec7 1\cf0 \strokec4 , y: \cf7 \strokec7 0\cf0 \strokec4  \}\}\cb1 \
\cb3       transition=\{\{ delay: \cf7 \strokec7 0.3\cf0 \strokec4  \}\}\cb1 \
\cb3     >\cb1 \
\cb3       <\cf5 \strokec5 Card\cf0 \strokec4  className=\{\cf6 \strokec6 `bg-white shadow-sm transition-all duration-300 rounded-2xl \cf0 \strokec4 $\{className\}\cf6 \strokec6 `\cf0 \strokec4 \}>\cb1 \
\cb3         <\cf5 \strokec5 CardHeader\cf0 \strokec4  className=\cf6 \strokec6 "pb-4 flex flex-row items-center justify-between"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 CardTitle\cf0 \strokec4  className=\cf6 \strokec6 "text-lg font-bold text-gray-800 flex items-center gap-2"\cf0 \strokec4 >\cb1 \
\cb3             \{title\}\cb1 \
\cb3           </\cf5 \strokec5 CardTitle\cf0 \strokec4 >\cb1 \
\cb3           \{headerContent\}\cb1 \
\cb3         </\cf5 \strokec5 CardHeader\cf0 \strokec4 >\cb1 \
\cb3         <\cf5 \strokec5 CardContent\cf0 \strokec4 >\cb1 \
\cb3           \{children\}\cb1 \
\cb3         </\cf5 \strokec5 CardContent\cf0 \strokec4 >\cb1 \
\cb3       </\cf5 \strokec5 Card\cf0 \strokec4 >\cb1 \
\cb3     </motion.div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}