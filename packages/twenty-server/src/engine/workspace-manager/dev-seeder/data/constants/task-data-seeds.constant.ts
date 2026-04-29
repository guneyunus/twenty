import { WORKSPACE_MEMBER_DATA_SEED_IDS } from 'src/engine/workspace-manager/dev-seeder/data/constants/workspace-member-data-seeds.constant';

type TaskDataSeed = {
  id: string;
  position: number;
  title: string;
  bodyV2Blocknote: string;
  bodyV2Markdown: string;
  status: string;
  dueAt: string | null;
  assigneeId: string;
  createdBySource: string;
  createdByWorkspaceMemberId: string;
  createdByName: string;
  updatedBySource: string;
  updatedByWorkspaceMemberId: string;
  updatedByName: string;
};

export const TASK_DATA_SEED_COLUMNS: (keyof TaskDataSeed)[] = [
  'id',
  'position',
  'title',
  'bodyV2Blocknote',
  'bodyV2Markdown',
  'status',
  'dueAt',
  'assigneeId',
  'createdBySource',
  'createdByWorkspaceMemberId',
  'createdByName',
  'updatedBySource',
  'updatedByWorkspaceMemberId',
  'updatedByName',
];

// Generate all task IDs
const GENERATE_TASK_IDS = (): Record<string, string> => {
  const TASK_IDS: Record<string, string> = {};

  // Person tasks (ID_1 to ID_1200)
  for (let INDEX = 1; INDEX <= 1200; INDEX++) {
    const HEX_INDEX = INDEX.toString(16).padStart(4, '0');

    TASK_IDS[`ID_${INDEX}`] = `20202020-${HEX_INDEX}-4e7c-8001-123456789def`;
  }

  // Company tasks (ID_1201 to ID_1800)
  for (let INDEX = 1201; INDEX <= 1800; INDEX++) {
    const HEX_INDEX = INDEX.toString(16).padStart(4, '0');

    TASK_IDS[`ID_${INDEX}`] = `20202020-${HEX_INDEX}-4e7c-9001-123456789def`;
  }

  return TASK_IDS;
};

export const TASK_DATA_SEED_IDS = GENERATE_TASK_IDS();

// Sample credible task titles and contents for person-related tasks
const PERSON_TASK_TEMPLATES = [
  {
    title: 'Basvuru sahibini ara',
    body: 'Uyelik basvurusundaki sektor, is tanimi ve hedef musteri alanlarini teyit et.',
    status: 'TODO',
    daysFromNow: 3,
  },
  {
    title: 'Uyelik teklifini gonder',
    body: 'Secilen Basic, Silver, Gold veya Team Gold planina gore teklif ve odeme bilgisini paylas.',
    status: 'IN_PROGRESS',
    daysFromNow: 5,
  },
  {
    title: 'Sozlesme onaylarini kontrol et',
    body: 'Uzak mesafe satis sozlesmesi, uyelik politikasi, uyelik sozlesmesi ve KVKK onaylarini kontrol et.',
    status: 'TODO',
    daysFromNow: 7,
  },
  {
    title: 'TEAM ziyaret gunu planla',
    body: 'Ziyaret edilecek takim, katilim tipi ve uygun toplanti tarihini ziyaretci lideri ile netlestir.',
    status: 'TODO',
    daysFromNow: 2,
  },
  {
    title: 'Iletisim bilgilerini dogrula',
    body: 'Telefon, e-posta, web sitesi ve sirket adresi alanlarini basvuru formuna gore kontrol et.',
    status: 'DONE',
    daysFromNow: null,
  },
  {
    title: 'Referans uye bilgisini dogrula',
    body: 'Davet eden uye veya referans uye bilgisini satis notuna bagla.',
    status: 'IN_PROGRESS',
    daysFromNow: 4,
  },
  {
    title: 'Profil tamamlama hatirlatmasi',
    body: 'Ana sektor, alt sektor, meslek grubu, is tanimi ve hedef musteri alanlarini tamamlat.',
    status: 'TODO',
    daysFromNow: 6,
  },
  {
    title: 'Uye onboarding adimini baslat',
    body: 'Odeme sonrasi profil, ilan haklari ve ReferansAI kullanim yonlendirmesini planla.',
    status: 'TODO',
    daysFromNow: 8,
  },
];

// Sample credible task titles and contents for company-related tasks
const COMPANY_TASK_TEMPLATES = [
  {
    title: 'Kurumsal lead degerlendir',
    body: 'Sirketin uyelik seviyesi, olasi kullanici sayisi ve satis onceligini belirle.',
    status: 'IN_PROGRESS',
    daysFromNow: 10,
  },
  {
    title: 'Gold uyelik odemesini takip et',
    body: 'Gold veya Team Gold odeme durumunu ve fatura bilgilerini kontrol et.',
    status: 'TODO',
    daysFromNow: 14,
  },
  {
    title: 'Referansal demo sunumu planla',
    body: 'Satis ekibi icin platform, ilan akisi, referans dongusu ve kapali is gorunumunu anlatan demo toplantisi ayarla.',
    status: 'TODO',
    daysFromNow: 7,
  },
  {
    title: 'TEAM chapter kapasitesini kontrol et',
    body: 'Chapter kapasitesi ve sektor tekeli kuralina gore basvurunun uygunlugunu kontrol et.',
    status: 'IN_PROGRESS',
    daysFromNow: 12,
  },
  {
    title: 'KVKK ve sozlesme durumunu guncelle',
    body: 'Sirket tarafindan gerekli sozlesme onaylarinin tamamlanip tamamlanmadigini CRM notuyla isaretle.',
    status: 'TODO',
    daysFromNow: 21,
  },
  {
    title: 'Kapali is etkisini raporla',
    body: 'Dogrulanmis closed business kaydinin CRM firsatina dogru yansidigini kontrol et.',
    status: 'DONE',
    daysFromNow: null,
  },
  {
    title: 'Tek yonlu CRM olayini izle',
    body: 'Referansal API tarafindan gelecekte gonderilecek outbox olayinin Twenty kaydina nasil yansiyacagini not et.',
    status: 'TODO',
    daysFromNow: 15,
  },
  {
    title: 'Uyelik yenileme firsatini ac',
    body: 'Silver veya Gold yenileme tarihi yaklasan sirket icin satis firsati olustur.',
    status: 'IN_PROGRESS',
    daysFromNow: 5,
  },
];

// Helper function to get random workspace member
const GET_RANDOM_ASSIGNEE = (): string => {
  const MEMBERS = [
    WORKSPACE_MEMBER_DATA_SEED_IDS.TIM,
    WORKSPACE_MEMBER_DATA_SEED_IDS.JONY,
    WORKSPACE_MEMBER_DATA_SEED_IDS.PHIL,
  ];

  return MEMBERS[Math.floor(Math.random() * MEMBERS.length)];
};

// Helper function to format due date
const FORMAT_DUE_DATE = (daysFromNow: number | null): string | null => {
  if (daysFromNow === null) return null;

  const DATE = new Date();

  DATE.setDate(DATE.getDate() + daysFromNow);

  return DATE.toISOString();
};

// Generate task data seeds
const GENERATE_TASK_SEEDS = (): TaskDataSeed[] => {
  const TASK_SEEDS: TaskDataSeed[] = [];

  // Person tasks (ID_1 to ID_1200)
  for (let INDEX = 1; INDEX <= 1200; INDEX++) {
    const TEMPLATE_INDEX = (INDEX - 1) % PERSON_TASK_TEMPLATES.length;
    const TEMPLATE = PERSON_TASK_TEMPLATES[TEMPLATE_INDEX];

    TASK_SEEDS.push({
      id: TASK_DATA_SEED_IDS[`ID_${INDEX}`],
      position: INDEX,
      title: TEMPLATE.title,
      bodyV2Blocknote: JSON.stringify([
        {
          id: `block-${INDEX}`,
          type: 'paragraph',
          props: {
            textColor: 'default',
            backgroundColor: 'default',
            textAlignment: 'left',
          },
          content: [{ type: 'text', text: TEMPLATE.body, styles: {} }],
          children: [],
        },
      ]),
      bodyV2Markdown: TEMPLATE.body,
      status: TEMPLATE.status,
      dueAt: FORMAT_DUE_DATE(TEMPLATE.daysFromNow),
      assigneeId: GET_RANDOM_ASSIGNEE(),
      createdBySource: 'MANUAL',
      createdByWorkspaceMemberId: WORKSPACE_MEMBER_DATA_SEED_IDS.TIM,
      createdByName: 'Tim A',
      updatedBySource: 'MANUAL',
      updatedByWorkspaceMemberId: WORKSPACE_MEMBER_DATA_SEED_IDS.TIM,
      updatedByName: 'Tim A',
    });
  }

  // Company tasks (ID_1201 to ID_1800)
  for (let INDEX = 1201; INDEX <= 1800; INDEX++) {
    const TEMPLATE_INDEX = (INDEX - 1201) % COMPANY_TASK_TEMPLATES.length;
    const TEMPLATE = COMPANY_TASK_TEMPLATES[TEMPLATE_INDEX];

    TASK_SEEDS.push({
      id: TASK_DATA_SEED_IDS[`ID_${INDEX}`],
      position: INDEX,
      title: TEMPLATE.title,
      bodyV2Blocknote: JSON.stringify([
        {
          id: `block-${INDEX}`,
          type: 'paragraph',
          props: {
            textColor: 'default',
            backgroundColor: 'default',
            textAlignment: 'left',
          },
          content: [{ type: 'text', text: TEMPLATE.body, styles: {} }],
          children: [],
        },
      ]),
      bodyV2Markdown: TEMPLATE.body,
      status: TEMPLATE.status,
      dueAt: FORMAT_DUE_DATE(TEMPLATE.daysFromNow),
      assigneeId: GET_RANDOM_ASSIGNEE(),
      createdBySource: 'MANUAL',
      createdByWorkspaceMemberId: WORKSPACE_MEMBER_DATA_SEED_IDS.TIM,
      createdByName: 'Tim A',
      updatedBySource: 'MANUAL',
      updatedByWorkspaceMemberId: WORKSPACE_MEMBER_DATA_SEED_IDS.TIM,
      updatedByName: 'Tim A',
    });
  }

  return TASK_SEEDS;
};

export const TASK_DATA_SEEDS = GENERATE_TASK_SEEDS();
