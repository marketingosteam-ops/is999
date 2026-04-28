{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue255;\red255\green255\blue254;\red0\green0\blue0;
\red14\green110\blue109;\red144\green1\blue18;\red191\green28\blue37;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c100000;\cssrgb\c100000\c100000\c99608;\cssrgb\c0\c0\c0;
\cssrgb\c0\c50196\c50196;\cssrgb\c63922\c8235\c8235;\cssrgb\c80392\c19216\c19216;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 import\cf0 \strokec4  \cf5 \strokec5 React\cf0 \strokec4  \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "react"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cf5 \strokec5 Link\cf0 \strokec4 , useLocation \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "react-router-dom"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ createPageUrl \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/utils"\cf0 \strokec4 ;\cb1 \
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{ \cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 LayoutGrid\cf0 \strokec4 , \cb1 \
\cb3   \cf5 \strokec5 Video\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 Megaphone\cf0 \strokec4 , \cb1 \
\cb3   \cf5 \strokec5 Users\cf0 \strokec4 , \cb1 \
\cb3   \cf5 \strokec5 MessageSquare\cf0 \strokec4 , \cb1 \
\cb3   \cf5 \strokec5 Newspaper\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 Heart\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 Calendar\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 Settings\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 HelpCircle\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 Library\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 MessageCircle\cf0 \strokec4  as \cf5 \strokec5 MessageIcon\cf0 \cb1 \strokec4 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "lucide-react"\cf0 \strokec4 ;\cb1 \
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 import\cf0 \strokec4  \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf5 \strokec5 Sidebar\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 SidebarContent\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 SidebarGroup\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 SidebarGroupContent\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 SidebarGroupLabel\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 SidebarMenu\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 SidebarMenuButton\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 SidebarMenuItem\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 SidebarHeader\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 SidebarFooter\cf0 \strokec4 ,\cb1 \
\cb3   \cf5 \strokec5 SidebarProvider\cf0 \strokec4 ,\cb1 \
\cb3 \} \cf2 \strokec2 from\cf0 \strokec4  \cf6 \strokec6 "@/components/ui/sidebar"\cf0 \strokec4 ;\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  mainNavigation = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \{ title: \cf6 \strokec6 "\uc0\u1583 \u1575 \u1588 \u1576 \u1608 \u1585 \u1583 "\cf0 \strokec4 , url: createPageUrl(\cf6 \strokec6 "Dashboard"\cf0 \strokec4 ), icon: \cf5 \strokec5 LayoutGrid\cf0 \strokec4  \},\cb1 \
\cb3   \{ title: \cf6 \strokec6 "\uc0\u1608 \u1740 \u1583 \u1574 \u1608 \u1607 \u1575 "\cf0 \strokec4 , url: \cf6 \strokec6 "#"\cf0 \strokec4 , icon: \cf5 \strokec5 Video\cf0 \strokec4  \},\cb1 \
\cb3   \{ title: \cf6 \strokec6 "\uc0\u1705 \u1605 \u1662 \u1740 \u1606 \u8204 \u1607 \u1575 "\cf0 \strokec4 , url: createPageUrl(\cf6 \strokec6 "Campaigns"\cf0 \strokec4 ), icon: \cf5 \strokec5 Megaphone\cf0 \strokec4  \},\cb1 \
\cb3   \{ title: \cf6 \strokec6 "\uc0\u1588 \u1576 \u1705 \u1607 \u8204 \u1607 \u1575 \u1740  \u1575 \u1580 \u1578 \u1605 \u1575 \u1593 \u1740 "\cf0 \strokec4 , url: createPageUrl(\cf6 \strokec6 "SocialMedia"\cf0 \strokec4 ), icon: \cf5 \strokec5 Users\cf0 \strokec4  \},\cb1 \
\cb3   \{ title: \cf6 \strokec6 "\uc0\u1578 \u1602 \u1608 \u1740 \u1605  \u1605 \u1581 \u1578 \u1608 \u1575 \u1740 \u1740 "\cf0 \strokec4 , url: \cf6 \strokec6 "#"\cf0 \strokec4 , icon: \cf5 \strokec5 Calendar\cf0 \strokec4  \},\cb1 \
\cb3   \{ title: \cf6 \strokec6 "\uc0\u1587 \u1608 \u1588 \u1575 \u1604  \u1604 \u1740 \u1587 \u1606 \u1740 \u1606 \u1711 "\cf0 \strokec4 , url: createPageUrl(\cf6 \strokec6 "SocialListening"\cf0 \strokec4 ), icon: \cf5 \strokec5 MessageSquare\cf0 \strokec4  \},\cb1 \
\cb3   \{ title: \cf6 \strokec6 "\uc0\u1578 \u1580 \u1585 \u1576 \u1607  \u1605 \u1588 \u1578 \u1585 \u1740 "\cf0 \strokec4 , url: createPageUrl(\cf6 \strokec6 "CustomerExperience"\cf0 \strokec4 ), icon: \cf5 \strokec5 Heart\cf0 \strokec4  \},\cb1 \
\cb3   \{ title: \cf6 \strokec6 "\uc0\u1705 \u1605 \u1662 \u1740 \u1606 \u8204 \u1607 \u1575 \u1740  PR"\cf0 \strokec4 , url: createPageUrl(\cf6 \strokec6 "PRCampaigns"\cf0 \strokec4 ), icon: \cf5 \strokec5 Newspaper\cf0 \strokec4  \}\cb1 \
\cb3 ];\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 const\cf0 \strokec4  helpNavigation = [\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3     \{ title: \cf6 \strokec6 "\uc0\u1578 \u1606 \u1592 \u1740 \u1605 \u1575 \u1578 "\cf0 \strokec4 , url: \cf6 \strokec6 "#"\cf0 \strokec4 , icon: \cf5 \strokec5 Settings\cf0 \strokec4  \},\cb1 \
\cb3     \{ title: \cf6 \strokec6 "\uc0\u1662 \u1588 \u1578 \u1740 \u1576 \u1575 \u1606 \u1740 "\cf0 \strokec4 , url: \cf6 \strokec6 "#"\cf0 \strokec4 , icon: \cf5 \strokec5 HelpCircle\cf0 \strokec4  \},\cb1 \
\cb3     \{ title: \cf6 \strokec6 "\uc0\u1705 \u1578 \u1575 \u1576 \u1582 \u1575 \u1606 \u1607 "\cf0 \strokec4 , url: \cf6 \strokec6 "#"\cf0 \strokec4 , icon: \cf5 \strokec5 Library\cf0 \strokec4  \},\cb1 \
\cb3     \{ title: \cf6 \strokec6 "\uc0\u1662 \u1740 \u1575 \u1605 \u8204 \u1607 \u1575 "\cf0 \strokec4 , url: \cf6 \strokec6 "#"\cf0 \strokec4 , icon: \cf5 \strokec5 MessageIcon\cf0 \strokec4  \}\cb1 \
\cb3 ]\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf2 \cb3 \strokec2 export\cf0 \strokec4  \cf2 \strokec2 default\cf0 \strokec4  \cf2 \strokec2 function\cf0 \strokec4  \cf5 \strokec5 Layout\cf0 \strokec4 (\{ children, currentPageName \}) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3   \cf2 \strokec2 const\cf0 \strokec4  location = useLocation();\cb1 \
\
\cb3   \cf2 \strokec2 return\cf0 \strokec4  (\cb1 \
\cb3     <div dir=\cf6 \strokec6 "rtl"\cf0 \strokec4  className=\cf6 \strokec6 "min-h-screen bg-gray-50 text-gray-800 font-sans"\cf0 \strokec4 >\cb1 \
\cb3       <\cf5 \strokec5 SidebarProvider\cf0 \strokec4 >\cb1 \
\cb3         <div className=\cf6 \strokec6 "flex flex-row-reverse w-full min-h-screen"\cf0 \strokec4 >\cb1 \
\cb3           <\cf5 \strokec5 Sidebar\cf0 \strokec4  className=\cf6 \strokec6 "border-l-0"\cf0 \strokec4  style=\{\{ backgroundColor: \cf6 \strokec6 '#2f5f61'\cf0 \strokec4  \}\}>\cb1 \
\cb3             <\cf5 \strokec5 SidebarHeader\cf0 \strokec4  className=\cf6 \strokec6 "p-6 text-center"\cf0 \strokec4 >\cb1 \
\cb3               <h2 className=\cf6 \strokec6 "font-bold text-white text-2xl"\cf0 \strokec4 >\cf5 \strokec5 PRiXiTE\cf0 \strokec4  $</h2>\cb1 \
\cb3             </\cf5 \strokec5 SidebarHeader\cf0 \strokec4 >\cb1 \
\cb3             \cb1 \
\cb3             <\cf5 \strokec5 SidebarContent\cf0 \strokec4  className=\cf6 \strokec6 "px-4"\cf0 \strokec4 >\cb1 \
\cb3               <\cf5 \strokec5 SidebarGroup\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 SidebarGroupLabel\cf0 \strokec4  className=\cf6 \strokec6 "text-xs font-medium text-gray-300 px-3 pt-3 pb-2"\cf0 \strokec4 >\cb1 \
\cb3                   \cf7 \cb3 \strokec7 \uc0\u1575 \u1589 \u1604 \u1740 \cf0 \cb1 \strokec4 \
\cb3                 </\cf5 \strokec5 SidebarGroupLabel\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 SidebarGroupContent\cf0 \strokec4 >\cb1 \
\cb3                   <\cf5 \strokec5 SidebarMenu\cf0 \strokec4  className=\cf6 \strokec6 "space-y-1"\cf0 \strokec4 >\cb1 \
\cb3                     \{mainNavigation.map((item) => (\cb1 \
\cb3                       <\cf5 \strokec5 SidebarMenuItem\cf0 \strokec4  key=\{item.title\}>\cb1 \
\cb3                         <\cf5 \strokec5 SidebarMenuButton\cf0 \strokec4  \cb1 \
\cb3                           asChild \cb1 \
\cb3                           className=\{\cf6 \strokec6 `\cf0 \cb1 \strokec4 \
\pard\pardeftab720\partightenfactor0
\cf6 \cb3 \strokec6                             text-gray-200 hover:bg-white/10 hover:text-white\cf0 \cb1 \strokec4 \
\cf6 \cb3 \strokec6                             transition-all duration-200 rounded-lg h-auto justify-start\cf0 \cb1 \strokec4 \
\cf6 \cb3 \strokec6                             \cf0 \strokec4 $\{location.pathname === item.url ? \cf6 \strokec6 'bg-white/10 text-white'\cf0 \strokec4  : \cf6 \strokec6 ''\cf0 \strokec4 \}\cb1 \
\cf6 \cb3 \strokec6                           `\cf0 \strokec4 \}\cb1 \
\pard\pardeftab720\partightenfactor0
\cf0 \cb3                         >\cb1 \
\cb3                           <\cf5 \strokec5 Link\cf0 \strokec4  to=\{item.url\} className=\cf6 \strokec6 "flex items-center gap-3 px-4 py-3"\cf0 \strokec4 >\cb1 \
\cb3                             <item.icon className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3                             <span className=\cf6 \strokec6 "text-sm font-medium"\cf0 \strokec4 >\{item.title\}</span>\cb1 \
\cb3                           </\cf5 \strokec5 Link\cf0 \strokec4 >\cb1 \
\cb3                         </\cf5 \strokec5 SidebarMenuButton\cf0 \strokec4 >\cb1 \
\cb3                       </\cf5 \strokec5 SidebarMenuItem\cf0 \strokec4 >\cb1 \
\cb3                     ))\}\cb1 \
\cb3                   </\cf5 \strokec5 SidebarMenu\cf0 \strokec4 >\cb1 \
\cb3                 </\cf5 \strokec5 SidebarGroupContent\cf0 \strokec4 >\cb1 \
\cb3               </\cf5 \strokec5 SidebarGroup\cf0 \strokec4 >\cb1 \
\
\cb3               <\cf5 \strokec5 SidebarGroup\cf0 \strokec4  className=\cf6 \strokec6 "mt-6"\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 SidebarGroupLabel\cf0 \strokec4  className=\cf6 \strokec6 "text-xs font-medium text-gray-300 px-3 pt-3 pb-2"\cf0 \strokec4 >\cb1 \
\cb3                   \cf7 \cb3 \strokec7 \uc0\u1585 \u1575 \u1607 \u1606 \u1605 \u1575 \cf0 \cb1 \strokec4 \
\cb3                 </\cf5 \strokec5 SidebarGroupLabel\cf0 \strokec4 >\cb1 \
\cb3                 <\cf5 \strokec5 SidebarGroupContent\cf0 \strokec4 >\cb1 \
\cb3                   <\cf5 \strokec5 SidebarMenu\cf0 \strokec4  className=\cf6 \strokec6 "space-y-1"\cf0 \strokec4 >\cb1 \
\cb3                     \{helpNavigation.map((item) => (\cb1 \
\cb3                       <\cf5 \strokec5 SidebarMenuItem\cf0 \strokec4  key=\{item.title\}>\cb1 \
\cb3                         <\cf5 \strokec5 SidebarMenuButton\cf0 \strokec4  \cb1 \
\cb3                           asChild \cb1 \
\cb3                           className=\cf6 \strokec6 "text-gray-200 hover:bg-white/10 hover:text-white transition-all duration-200 rounded-lg h-auto justify-start"\cf0 \cb1 \strokec4 \
\cb3                         >\cb1 \
\cb3                           <\cf5 \strokec5 Link\cf0 \strokec4  to=\{item.url\} className=\cf6 \strokec6 "flex items-center gap-3 px-4 py-3"\cf0 \strokec4 >\cb1 \
\cb3                             <item.icon className=\cf6 \strokec6 "w-5 h-5"\cf0 \strokec4  />\cb1 \
\cb3                             <span className=\cf6 \strokec6 "text-sm font-medium"\cf0 \strokec4 >\{item.title\}</span>\cb1 \
\cb3                           </\cf5 \strokec5 Link\cf0 \strokec4 >\cb1 \
\cb3                         </\cf5 \strokec5 SidebarMenuButton\cf0 \strokec4 >\cb1 \
\cb3                       </\cf5 \strokec5 SidebarMenuItem\cf0 \strokec4 >\cb1 \
\cb3                     ))\}\cb1 \
\cb3                   </\cf5 \strokec5 SidebarMenu\cf0 \strokec4 >\cb1 \
\cb3                 </\cf5 \strokec5 SidebarGroupContent\cf0 \strokec4 >\cb1 \
\cb3               </\cf5 \strokec5 SidebarGroup\cf0 \strokec4 >\cb1 \
\cb3             </\cf5 \strokec5 SidebarContent\cf0 \strokec4 >\cb1 \
\
\cb3             <\cf5 \strokec5 SidebarFooter\cf0 \strokec4  className=\cf6 \strokec6 "p-4"\cf0 \strokec4 >\cb1 \
\cb3                <div className=\cf6 \strokec6 "flex items-center gap-3"\cf0 \strokec4 >\cb1 \
\cb3                   <div className=\cf6 \strokec6 "w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold text-lg shrink-0"\cf0 \strokec4 >\cb1 \
\cb3                     \cf7 \cb3 \strokec7 \uc0\u1605 \cf0 \cb1 \strokec4 \
\cb3                   </div>\cb1 \
\cb3                   <div className=\cf6 \strokec6 "text-right overflow-hidden"\cf0 \strokec4 >\cb1 \
\cb3                       <p className=\cf6 \strokec6 "font-semibold text-sm text-white truncate"\cf0 \strokec4 >\cf7 \cb3 \strokec7 \uc0\u1605 \u1583 \u1740 \u1585 \cf0 \cb3 \strokec4  \cf7 \cb3 \strokec7 \uc0\u1583 \u1575 \u1588 \u1576 \u1608 \u1585 \u1583 \cf0 \cb3 \strokec4 </p>\cb1 \
\cb3                       <p className=\cf6 \strokec6 "text-xs text-gray-300 truncate"\cf0 \strokec4 >\cf7 \cb3 \strokec7 \uc0\u1605 \u1583 \u1740 \u1585 \cf0 \cb3 \strokec4  \cf7 \cb3 \strokec7 \uc0\u1575 \u1585 \u1588 \u1583 \cf0 \cb3 \strokec4 </p>\cb1 \
\cb3                   </div>\cb1 \
\cb3                </div>\cb1 \
\cb3             </\cf5 \strokec5 SidebarFooter\cf0 \strokec4 >\cb1 \
\cb3           </\cf5 \strokec5 Sidebar\cf0 \strokec4 >\cb1 \
\
\cb3           <main className=\cf6 \strokec6 "flex-1 flex flex-col"\cf0 \strokec4 >\cb1 \
\cb3             <div className=\cf6 \strokec6 "flex-1 overflow-auto"\cf0 \strokec4 >\cb1 \
\cb3               \{children\}\cb1 \
\cb3             </div>\cb1 \
\cb3           </main>\cb1 \
\cb3         </div>\cb1 \
\cb3       </\cf5 \strokec5 SidebarProvider\cf0 \strokec4 >\cb1 \
\cb3     </div>\cb1 \
\cb3   );\cb1 \
\cb3 \}\cb1 \
}