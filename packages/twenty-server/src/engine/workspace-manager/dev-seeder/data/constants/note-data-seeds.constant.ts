import { WORKSPACE_MEMBER_DATA_SEED_IDS } from 'src/engine/workspace-manager/dev-seeder/data/constants/workspace-member-data-seeds.constant';

type NoteDataSeed = {
  id: string;
  position: number;
  title: string;
  bodyV2Blocknote: string;
  bodyV2Markdown: string;
  createdBySource: string;
  createdByWorkspaceMemberId: string;
  createdByName: string;
  createdByContext: string | null;
  updatedBySource: string;
  updatedByWorkspaceMemberId: string;
  updatedByName: string;
};

export const NOTE_DATA_SEED_COLUMNS: (keyof NoteDataSeed)[] = [
  'id',
  'position',
  'title',
  'bodyV2Blocknote',
  'bodyV2Markdown',
  'createdBySource',
  'createdByWorkspaceMemberId',
  'createdByName',
  'createdByContext',
  'updatedBySource',
  'updatedByWorkspaceMemberId',
  'updatedByName',
];

const GENERATE_NOTE_IDS = (): Record<string, string> => {
  const NOTE_IDS: Record<string, string> = {};

  for (let INDEX = 1; INDEX <= 1200; INDEX++) {
    const HEX_INDEX = INDEX.toString(16).padStart(4, '0');

    NOTE_IDS[`ID_${INDEX}`] = `20202020-${HEX_INDEX}-4e7c-8001-123456789abc`;
  }

  for (let INDEX = 1201; INDEX <= 1800; INDEX++) {
    const HEX_INDEX = INDEX.toString(16).padStart(4, '0');

    NOTE_IDS[`ID_${INDEX}`] = `20202020-${HEX_INDEX}-4e7c-9001-123456789abc`;
  }

  return NOTE_IDS;
};

export const NOTE_DATA_SEED_IDS = GENERATE_NOTE_IDS();

const PERSON_NOTE_TEMPLATES = [
  {
    title: 'Silver uyelik basvuru notu',
    content:
      'Online basvuru formu uzerinden geldi. Sektor, is tanimi ve hedef musteri bilgileri tamamlanacak; odeme ekrani Silver plana gore takip edilecek.',
  },
  {
    title: 'Gold upgrade gorusmesi',
    content:
      'Mevcut uye daha yuksek ilan ve iletisim limitleri icin Gold plana gecmek istiyor. Satis ekibi sozlesme ve odeme adimini takip edecek.',
  },
  {
    title: 'TEAM ziyaret basvurusu',
    content:
      'Ziyaret edilecek takim ve katilim tipi secildi. Ziyaretci lideri uygun toplanti gununu onayladiktan sonra odeme bilgisi paylasilacak.',
  },
  {
    title: 'Referans veren uye',
    content:
      'Bu kisi yeni basvuru icin davet kaynagi olarak gorunuyor. Referans kalitesi ve kapali is katkisi satis gorunumunde takip edilecek.',
  },
  {
    title: 'Supheli profil inceleme',
    content:
      'Red orani yuksek iletisim talepleri nedeniyle profil satis ekibinin gorunumune dustu. Bu yalnizca CRM takip notudur, uygulama moderasyonu backoffice tarafindadir.',
  },
  {
    title: 'Closed business dogrulama',
    content:
      'Referans sonucu olusan is anonim kapali is olarak dogrulanacak. CRM tarafinda satis etkisi gorunur, kaynak veri Referansal API tarafinda kalir.',
  },
  {
    title: 'Akademi ilgisi',
    content:
      'Uye egitim videolari ve canli egitim haklari hakkinda bilgi istedi. Paket ve katilim ucreti satis firsatina baglandi.',
  },
  {
    title: 'Power partner eslesmesi',
    content:
      'ReferansAI senaryosunda tamamlayici is ortagi olarak gorunuyor. Satis ekibi bu kaydi iliski gelistirme firsati olarak izleyecek.',
  },
];

const COMPANY_NOTE_TEMPLATES = [
  {
    title: 'Kurumsal lead',
    content:
      'Kurumsal basvuru veya toplu uyelik ilgisi olustu. Account owner ilk degerlendirme ve teklif adimini takip edecek.',
  },
  {
    title: 'TEAM chapter takibi',
    content:
      'Takim ziyareti ve uyelik basvurulari bu chapter uzerinden takip ediliyor. Sektor tekeli ve kapasite bilgisi uygulama tarafinda yonetilecek.',
  },
  {
    title: 'Hedef musteri profili',
    content:
      'Sirket hedef musteri ve sektor eslesmesi acisindan yuksek potansiyele sahip. CRM gorunumu satis onceligini gostermek icin kullanilir.',
  },
  {
    title: 'Sozlesme ve KVKK onayi',
    content:
      'Uyelik sozlesmesi, uzak mesafe satis sozlesmesi ve KVKK onaylari tamamlanmadan odeme kapatilmayacak.',
  },
  {
    title: 'Tek yonlu CRM olayi',
    content:
      'Bu kayit Referansal domain olayinin Twenty CRM tarafina tek yonlu yansitilmis demo karsiligidir. Twenty kaynak sistem degildir.',
  },
  {
    title: 'Odeme takibi',
    content:
      'Silver, Gold veya Team Gold ucretlendirmesine gore odeme durumu satis ekibi tarafindan takip edilecek.',
  },
  {
    title: 'Kapali is etkisi',
    content:
      'Dogrulanmis kapali is satis panelinde ekonomik canlilik etkisini gostermek icin temsil edildi; kisi ve firma bilgileri uygulamada anonimlestirilecek.',
  },
  {
    title: 'Ilan ve firsat akisi',
    content:
      'Hedefli ilan veya ortak satis cagrisi bu sirketle iliskili satis firsati olarak izlendi.',
  },
];

// Generate note data seeds
const GENERATE_NOTE_SEEDS = (): NoteDataSeed[] => {
  const NOTE_SEEDS: NoteDataSeed[] = [];

  // Person notes (ID_1 to ID_1200)
  for (let INDEX = 1; INDEX <= 1200; INDEX++) {
    const TEMPLATE_INDEX = (INDEX - 1) % PERSON_NOTE_TEMPLATES.length;
    const TEMPLATE = PERSON_NOTE_TEMPLATES[TEMPLATE_INDEX];

    NOTE_SEEDS.push({
      id: NOTE_DATA_SEED_IDS[`ID_${INDEX}`],
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
          content: [{ type: 'text', text: TEMPLATE.content, styles: {} }],
          children: [],
        },
      ]),
      bodyV2Markdown: TEMPLATE.content,
      createdBySource: 'MANUAL',
      createdByWorkspaceMemberId: WORKSPACE_MEMBER_DATA_SEED_IDS.TIM,
      createdByName: 'Tim A',
      createdByContext: null,
      updatedBySource: 'MANUAL',
      updatedByWorkspaceMemberId: WORKSPACE_MEMBER_DATA_SEED_IDS.TIM,
      updatedByName: 'Tim A',
    });
  }

  // Company notes (ID_1201 to ID_1800)
  for (let INDEX = 1201; INDEX <= 1800; INDEX++) {
    const TEMPLATE_INDEX = (INDEX - 1201) % COMPANY_NOTE_TEMPLATES.length;
    const TEMPLATE = COMPANY_NOTE_TEMPLATES[TEMPLATE_INDEX];

    NOTE_SEEDS.push({
      id: NOTE_DATA_SEED_IDS[`ID_${INDEX}`],
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
          content: [{ type: 'text', text: TEMPLATE.content, styles: {} }],
          children: [],
        },
      ]),
      bodyV2Markdown: TEMPLATE.content,
      createdBySource: 'MANUAL',
      createdByWorkspaceMemberId: WORKSPACE_MEMBER_DATA_SEED_IDS.TIM,
      createdByName: 'Tim A',
      createdByContext: null,
      updatedBySource: 'MANUAL',
      updatedByWorkspaceMemberId: WORKSPACE_MEMBER_DATA_SEED_IDS.TIM,
      updatedByName: 'Tim A',
    });
  }

  return NOTE_SEEDS;
};

export const NOTE_DATA_SEEDS = GENERATE_NOTE_SEEDS();
