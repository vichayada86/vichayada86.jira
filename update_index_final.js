const fs = require('fs');
const filePath = 'd:/Tasky_Project/tasky/tasky2/index.html';
let content = fs.readFileSync(filePath, 'utf8');

// Normalization CRLF
const isCRLF = content.includes('\r\n');
content = content.replace(/\r\n/g, '\n');

// 1. Add #index-space-epic-container-wrapper inside #charts-section
const chartsSectionEndTarget = `          <div id="chart-container-3" class="hidden bg-white dark:bg-darkCard p-6 rounded-2xl border border-slate-200 dark:border-darkBorder shadow-sm flex flex-col justify-between">
            <h4 id="chart-title-3" class="text-sm font-bold text-slate-800 dark:text-slate-200 mb-4"><i class="fa-solid fa-chart-pie mr-2 text-purple-500"></i>สถานะของงานภาพรวม</h4>
            <div class="h-64 relative flex items-center justify-center">
              <canvas id="chart3"></canvas>
            </div>
          </div>
        </section>`;

const chartsSectionEndReplacement = `          <div id="chart-container-3" class="hidden bg-white dark:bg-darkCard p-6 rounded-2xl border border-slate-200 dark:border-darkBorder shadow-sm flex flex-col justify-between">
            <h4 id="chart-title-3" class="text-sm font-bold text-slate-800 dark:text-slate-200 mb-4"><i class="fa-solid fa-chart-pie mr-2 text-purple-500"></i>สถานะของงานภาพรวม</h4>
            <div class="h-64 relative flex items-center justify-center">
              <canvas id="chart3"></canvas>
            </div>
          </div>
          <!-- Space & Epic Progress Column (For Sale, Admin, Service) -->
          <div id="index-space-epic-container-wrapper" class="hidden bg-white dark:bg-darkCard p-6 rounded-2xl border border-slate-200 dark:border-darkBorder shadow-sm flex flex-col justify-between lg:col-span-2">
             <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 mb-4">ความคืบหน้าของงาน (Space & Epic Progress)</h4>
             <div id="index-space-epic-container" class="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                <!-- Populated dynamically -->
             </div>
          </div>
        </section>`;

if (content.includes(chartsSectionEndTarget)) {
    content = content.replace(chartsSectionEndTarget, chartsSectionEndReplacement);
    console.log('Successfully inserted index-space-epic-container-wrapper HTML.');
} else {
    console.error('chartsSectionEndTarget not found!');
}

// 2. Update setTab menu-tasklist visibility logic
const setTabTarget = `        // Reset menu classes
        menuBtnDashboard.className = "w-full flex items-center gap-3.5 px-4 py-3.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-base font-semibold transition text-left";
        menuBtnTasklist.className = "w-full flex items-center gap-3.5 px-4 py-3.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-base font-semibold transition text-left";
        menuBtnCalendar.className = "hidden w-full flex items-center gap-3.5 px-4 py-3.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-base font-semibold transition text-left";
        
        // Show calendar tab menu for authorized roles
        if (['PM', 'SrDev', 'Dev'].includes(currentRole)) {
           menuBtnCalendar.classList.remove('hidden');
        }`;

const setTabReplacement = `        // Reset menu classes
        menuBtnDashboard.className = "w-full flex items-center gap-3.5 px-4 py-3.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-base font-semibold transition text-left";
        menuBtnTasklist.className = "w-full flex items-center gap-3.5 px-4 py-3.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-base font-semibold transition text-left";
        menuBtnCalendar.className = "hidden w-full flex items-center gap-3.5 px-4 py-3.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-base font-semibold transition text-left";
        
        if (['Sale', 'Admin', 'Service'].includes(currentRole)) {
           menuBtnTasklist.classList.add('hidden');
        } else {
           menuBtnTasklist.classList.remove('hidden');
        }
        
        // Show calendar tab menu for authorized roles
        if (['PM', 'SrDev', 'Dev'].includes(currentRole)) {
           menuBtnCalendar.classList.remove('hidden');
        }`;

if (content.includes(setTabTarget)) {
    content = content.replace(setTabTarget, setTabReplacement);
    console.log('Successfully updated setTab visibility logic.');
} else {
    console.error('setTabTarget not found!');
}

// 3. Update switchRole layouts reset and Sale/Admin/Service custom layout
const resetTarget = `      // Hidden elements reset
      document.getElementById('kpi-box-1').classList.add('hidden');
      document.getElementById('action-buttons').classList.add('hidden');
      document.getElementById('btn-create-task').classList.add('hidden');
      document.getElementById('btn-schedule').classList.add('hidden');
      document.getElementById('dev-team-menu').classList.add('hidden');
      document.getElementById('ceo-multi-space-container').classList.add('hidden');
      document.getElementById('recent-tasks-panel').classList.remove('hidden');
      document.getElementById('dev-priority-section').classList.add('hidden');
      document.getElementById('kpi-reset-subtext').classList.add('hidden');
      document.getElementById('dev-kanban-section').classList.add('hidden');
      document.getElementById('charts-section').classList.remove('hidden');
      
      // Expand grid config for charts
      document.getElementById('chart-container-3').classList.add('hidden');
      document.getElementById('charts-section').className = "grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all";`;

const resetReplacement = `      // Hidden elements reset
      document.getElementById('kpi-box-1').classList.add('hidden');
      document.getElementById('action-buttons').classList.add('hidden');
      document.getElementById('btn-create-task').classList.add('hidden');
      document.getElementById('btn-schedule').classList.add('hidden');
      document.getElementById('dev-team-menu').classList.add('hidden');
      document.getElementById('ceo-multi-space-container').classList.add('hidden');
      document.getElementById('recent-tasks-panel').classList.remove('hidden');
      document.getElementById('dev-priority-section').classList.add('hidden');
      document.getElementById('kpi-reset-subtext').classList.add('hidden');
      document.getElementById('dev-kanban-section').classList.add('hidden');
      document.getElementById('charts-section').classList.remove('hidden');
      
      // Reset chart layout classes
      document.getElementById('chart-container-1').classList.remove('hidden');
      document.getElementById('chart-container-2').classList.remove('hidden');
      document.getElementById('chart-container-3').classList.add('hidden');
      document.getElementById('chart-container-1').className = "bg-white dark:bg-darkCard p-6 rounded-2xl border border-slate-200 dark:border-darkBorder shadow-sm flex flex-col justify-between";
      document.getElementById('chart-container-2').className = "bg-white dark:bg-darkCard p-6 rounded-2xl border border-slate-200 dark:border-darkBorder shadow-sm flex flex-col justify-between";
      
      const indexSpaceEpic = document.getElementById('index-space-epic-container-wrapper');
      if (indexSpaceEpic) indexSpaceEpic.classList.add('hidden');

      // Expand grid config for charts
      document.getElementById('charts-section').className = "grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all";`;

if (content.includes(resetTarget)) {
    content = content.replace(resetTarget, resetReplacement);
    console.log('Successfully updated switchRole reset target logic.');
} else {
    console.error('resetTarget not found!');
}

// 4. Update switchRole case Sale / Admin / Service
const caseTarget = `        case 'Sale':
        case 'Admin':
        case 'Service':
          headerTitle = \`🛎️ หน้าต่างการติดตามงาน (\${roleInfo[role].name})\`;
          setKPILabels("-", "งานที่ทีมพัฒนากลาง", "กำลังดำเนินการ", "สำเร็จส่งมอบ");
          break;`;

const caseReplacement = `        case 'Sale':
        case 'Admin':
        case 'Service':
          headerTitle = \`🛎️ หน้าต่างการติดตามงาน (\${roleInfo[role].name})\`;
          setKPILabels("-", "งานทั้งหมด", "กำลังดำเนินการ", "เสร็จสิ้น");
          
          // Hide standard charts we don't need, show the ones we want
          document.getElementById('chart-container-2').classList.add('hidden');
          const spaceEpicWrap = document.getElementById('index-space-epic-container-wrapper');
          if (spaceEpicWrap) spaceEpicWrap.classList.remove('hidden');
          
          // Set charts layout column width: 1 col for doughnut status, 2 cols for space/epic progress
          document.getElementById('charts-section').className = "grid grid-cols-1 lg:grid-cols-3 gap-6 transition-all";
          document.getElementById('chart-container-1').className = "bg-white dark:bg-darkCard p-6 rounded-2xl border border-slate-200 dark:border-darkBorder shadow-sm flex flex-col justify-between lg:col-span-1";
          break;`;

if (content.includes(caseTarget)) {
    content = content.replace(caseTarget, caseReplacement);
    console.log('Successfully updated case Sale/Admin/Service logic.');
} else {
    console.error('caseTarget not found!');
}

// 5. Update renderRecentTasks and renderStandardTable in index.html to support Jira Space and eye icon action for Sale/Admin/Service
const renderRecentTasksTarget = `        limitList.forEach(item => {
           const row = document.createElement('tr');
           row.className = "border-t border-slate-100 dark:border-slate-800/40 text-xs";
           
           let title = item.summary || item.name;
           let key = item.key || item.id;
           let assignee = item.assignee || 'Sheet System';
           
           let typeBadge = '';
           if (item.type === 'Support') typeBadge = 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400';
           else if (item.type === 'Install') typeBadge = 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400';
           else typeBadge = 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-355';

           const isDone = item.status === 'เสร็จสิ้น' || item.status === 'Completed';
           const badgeClass = isDone ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400' : 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400';

           row.innerHTML = \`
              <td class="p-3 pl-5 font-bold text-blue-500">\${key}</td>
              <td class="p-3 font-semibold text-slate-700 dark:text-slate-300 truncate max-w-xs">\${title}</td>
              <td class="p-3"><span class="px-1.5 py-0.5 rounded text-[10px] font-semibold \${typeBadge}">\${item.type}</span></td>
              <td class="p-3"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold \${badgeClass}">\${item.status}</span></td>
              <td class="p-3 text-slate-450 font-medium">\${assignee}</td>
           \`;
           tbody.appendChild(row);
        });`;

const renderRecentTasksReplacement = `        limitList.forEach(item => {
           const row = document.createElement('tr');
           row.className = "border-t border-slate-100 dark:border-slate-800/40 text-xs";
           
           let title = item.summary || item.name;
           let key = item.key || item.id;
           let assignee = item.assignee || 'Sheet System';
           
           let typeBadge = '';
           if (item.type === 'Support') typeBadge = 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400';
           else if (item.type === 'Install') typeBadge = 'bg-indigo-50 text-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-400';
           else typeBadge = 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-355';

           const isDone = item.status === 'เสร็จสิ้น' || item.status === 'Completed';
           const badgeClass = isDone ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400' : 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400';

           if (['Sale', 'Admin', 'Service'].includes(currentRole)) {
              row.innerHTML = \`
                 <td class="p-3 pl-5 font-bold text-blue-500">\${key}</td>
                 <td class="p-3 font-semibold text-slate-755 dark:text-slate-300 truncate max-w-xs">\${title}</td>
                 <td class="p-3 font-bold text-slate-455">\${item.project || 'Jira Space'}</td>
                 <td class="p-3 font-medium text-slate-500 dark:text-slate-400">\${assignee}</td>
                 <td class="p-3 text-center">
                    <button onclick="openDetailModal('\${key}')" class="px-2 py-1 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg text-xs font-bold transition text-slate-600 dark:text-slate-300">
                      <i class="fa-solid fa-eye"></i> ดูตั๋ว
                    </button>
                 </td>
              \`;
           } else {
              row.innerHTML = \`
                 <td class="p-3 pl-5 font-bold text-blue-500">\${key}</td>
                 <td class="p-3 font-semibold text-slate-700 dark:text-slate-300 truncate max-w-xs">\${title}</td>
                 <td class="p-3"><span class="px-1.5 py-0.5 rounded text-[10px] font-semibold \${typeBadge}">\${item.type}</span></td>
                 <td class="p-3"><span class="px-2 py-0.5 rounded-full text-[10px] font-bold \${badgeClass}">\${item.status}</span></td>
                 <td class="p-3 text-slate-455 font-medium">\${assignee}</td>
              \`;
           }
           tbody.appendChild(row);
        });`;

if (content.includes(renderRecentTasksTarget)) {
    content = content.replace(renderRecentTasksTarget, renderRecentTasksReplacement);
    console.log('Successfully updated renderRecentTasks columns logic.');
} else {
    console.error('renderRecentTasksTarget not found!');
}

const renderStandardTableTarget = `     function renderStandardTable() {
       document.getElementById('table-header-row').innerHTML = \`
           <th class="p-3 pl-5 w-28">Key</th>
           <th class="p-3">หัวข้อเรื่อง (Summary)</th>
           <th class="p-3 w-28">ประเภท</th>
           <th class="p-3 w-32">สถานะ</th>
           <th class="p-3 w-40">ผู้รับผิดชอบ</th>
           <th class="p-3 w-24 text-center">จัดการ</th>
       \`;
     }`;

const renderStandardTableReplacement = `     function renderStandardTable() {
       if (['Sale', 'Admin', 'Service'].includes(currentRole)) {
          document.getElementById('table-header-row').innerHTML = \`
              <th class="p-3 pl-5 w-28">Key</th>
              <th class="p-3">Summary</th>
              <th class="p-3">Jira Space</th>
              <th class="p-3">Assignee</th>
              <th class="p-3 w-24 text-center">จัดการ</th>
          \`;
       } else {
          document.getElementById('table-header-row').innerHTML = \`
              <th class="p-3 pl-5 w-28">Key</th>
              <th class="p-3">หัวข้อเรื่อง (Summary)</th>
              <th class="p-3 w-28">ประเภท</th>
              <th class="p-3 w-32">สถานะ</th>
              <th class="p-3 w-40">ผู้รับผิดชอบ</th>
              <th class="p-3 w-24 text-center">จัดการ</th>
          \`;
       }
     }`;

if (content.includes(renderStandardTableTarget)) {
    content = content.replace(renderStandardTableTarget, renderStandardTableReplacement);
    console.log('Successfully updated renderStandardTable header configuration.');
} else {
    console.error('renderStandardTableTarget not found!');
}

// 6. Append renderIndexSpaceEpicProgress helper function to index.html and run it during filter application
const filterCallTarget = `         }
         renderStandardCharts();
         renderRecentTasks(filteredData);
      }
    }`;

const filterCallReplacement = `         }
         renderStandardCharts();
         if (['Sale', 'Admin', 'Service'].includes(currentRole)) {
            renderIndexSpaceEpicProgress();
         }
         renderRecentTasks(filteredData);
      }
    }

    function toggleIndexAccordion(spaceName) {
       const contentEl = document.getElementById(\`index-content-\${spaceName}\`);
       const arrowEl = document.getElementById(\`index-arrow-\${spaceName}\`);
       if (contentEl.classList.contains('hidden')) {
          contentEl.classList.remove('hidden');
          arrowEl.classList.add('rotate-90');
       } else {
          contentEl.classList.add('hidden');
          arrowEl.classList.remove('rotate-90');
       }
    }

    function renderIndexSpaceEpicProgress() {
       const container = document.getElementById('index-space-epic-container');
       if (!container) return;
       container.innerHTML = "";

       let projMap = {};
       rawJiraData.forEach(item => {
           if (!projMap[item.project]) {
               projMap[item.project] = { name: item.project, total: 0, done: 0 };
           }
           projMap[item.project].total++;
           if (item.status === 'เสร็จสิ้น') {
               projMap[item.project].done++;
           }
       });

       const spaces = Object.values(projMap);
       if (spaces.length === 0) {
          container.innerHTML = \`<div class="p-6 text-center text-slate-400 text-xs">ไม่พบข้อมูลความคืบหน้า</div>\`;
          return;
       }

       spaces.forEach(space => {
          const total = space.total || 1;
          const donePct = Math.round((space.done / total) * 100);
          
          const spaceTasks = rawJiraData.filter(t => t.project === space.name);
          let epicMap = {
             "Epic Core Base Module": 0,
             "Epic User Interface Blueprint": 0,
             "Epic Support Handover System": 0
          };
          spaceTasks.forEach((t, idx) => {
             if (idx % 3 === 0) epicMap["Epic Core Base Module"]++;
             else if (idx % 3 === 1) epicMap["Epic User Interface Blueprint"]++;
             else epicMap["Epic Support Handover System"]++;
          });

          let epicHTML = "";
          Object.keys(epicMap).forEach(epicName => {
             const count = epicMap[epicName];
             if (count === 0) return;
             epicHTML += \`
                <div class="flex items-center justify-between p-2.5 bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 rounded-xl pl-8 mt-1">
                   <div class="flex items-center gap-2 text-xs">
                      <span class="text-blue-500"><i class="fa-solid fa-bolt"></i></span>
                      <span class="text-slate-700 dark:text-slate-300 font-semibold">\${epicName}</span>
                   </div>
                   <span class="text-[10px] bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full font-bold">\${count} งาน</span>
                </div>
             \`;
          });

          const card = document.createElement('div');
          card.className = "border border-slate-100 dark:border-slate-800/80 rounded-xl overflow-hidden";
          card.innerHTML = \`
             <div onclick="toggleIndexAccordion('\${space.name}')" class="p-4 bg-slate-50/50 dark:bg-slate-800/20 hover:bg-slate-100/40 dark:hover:bg-slate-800/40 flex items-center justify-between cursor-pointer select-none transition">
                <div class="flex items-center gap-2">
                   <i id="index-arrow-\${space.name}" class="fa-solid fa-chevron-right text-slate-400 text-xs transition-transform"></i>
                   <span class="font-bold text-xs text-slate-800 dark:text-white">สเปซ: \${space.name}</span>
                </div>
                <div class="flex items-center gap-4">
                   <div class="w-32 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden flex">
                      <div class="bg-blue-500 h-full" style="width: \${donePct}%"></div>
                   </div>
                   <span class="text-[10px] font-bold text-slate-500 dark:text-slate-400 w-8 text-right">\${donePct}%</span>
                </div>
             </div>
             <div id="index-content-\${space.name}" class="hidden p-3 bg-white dark:bg-darkCard border-t border-slate-100 dark:border-slate-800/60 space-y-1">
                \${epicHTML}
             </div>
          \`;
          container.appendChild(card);
       });
    }`;

if (content.includes(filterCallTarget)) {
    content = content.replace(filterCallTarget, filterCallReplacement);
    console.log('Successfully updated filter call logic and appended helper functions.');
} else {
    console.error('filterCallTarget not found!');
}

// Restore CRLF
if (isCRLF) {
    content = content.replace(/\n/g, '\r\n');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully finished index.html modification for Sale/Admin/Service roles!');
