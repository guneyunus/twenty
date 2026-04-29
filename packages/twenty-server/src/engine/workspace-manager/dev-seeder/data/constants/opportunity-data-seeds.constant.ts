import { isDefined } from 'twenty-shared/utils';

import { COMPANY_DATA_SEED_IDS } from 'src/engine/workspace-manager/dev-seeder/data/constants/company-data-seeds.constant';
import { PERSON_DATA_SEED_IDS } from 'src/engine/workspace-manager/dev-seeder/data/constants/person-data-seeds.constant';
import {
  WORKSPACE_MEMBER_DATA_SEED_IDS,
  WORKSPACE_MEMBER_DATA_SEEDS,
} from 'src/engine/workspace-manager/dev-seeder/data/constants/workspace-member-data-seeds.constant';

type OpportunityDataSeed = {
  id: string;
  name: string;
  amountAmountMicros: number;
  amountCurrencyCode: string;
  closeDate: Date;
  stage: string;
  position: number;
  pointOfContactId: string;
  companyId: string;
  ownerId: string;
  createdBySource: string;
  createdByWorkspaceMemberId: string;
  createdByName: string;
  updatedBySource: string;
  updatedByWorkspaceMemberId: string;
  updatedByName: string;
};

export const OPPORTUNITY_DATA_SEED_COLUMNS: (keyof OpportunityDataSeed)[] = [
  'id',
  'name',
  'amountAmountMicros',
  'amountCurrencyCode',
  'closeDate',
  'stage',
  'position',
  'pointOfContactId',
  'companyId',
  'ownerId',
  'createdBySource',
  'createdByWorkspaceMemberId',
  'createdByName',
  'updatedBySource',
  'updatedByWorkspaceMemberId',
  'updatedByName',
];

const GENERATE_OPPORTUNITY_IDS = (): Record<string, string> => {
  const OPPORTUNITY_IDS: Record<string, string> = {};

  for (let INDEX = 1; INDEX <= 50; INDEX++) {
    const HEX_INDEX = INDEX.toString(16).padStart(4, '0');

    OPPORTUNITY_IDS[`ID_${INDEX}`] =
      `50505050-${HEX_INDEX}-4e7c-8001-123456789abc`;
  }

  return OPPORTUNITY_IDS;
};

export const OPPORTUNITY_DATA_SEED_IDS = GENERATE_OPPORTUNITY_IDS();

// Referansal CRM demo opportunities for membership, TEAM, and closed business flows.
const OPPORTUNITY_TEMPLATES = [
  {
    name: 'Silver uyelik basvurusu - Mavi Bulut Yazilim',
    amount: 300,
    stage: 'NEW',
  },
  { name: 'Gold uyelik upgrade - Ada Hukuk', amount: 500, stage: 'SCREENING' },
  {
    name: 'TEAM Gold gorusmesi - Vizyon Insaat',
    amount: 2500,
    stage: 'MEETING',
  },
  {
    name: 'Kurumsal lead - Nova Saglik Hizmetleri',
    amount: 1200,
    stage: 'PROPOSAL',
  },
  {
    name: 'Verified closed business - Atlas Lojistik',
    amount: 180000,
    stage: 'CUSTOMER',
  },
  { name: 'TEAM ziyaret basvurusu - Pusula Dijital', amount: 75, stage: 'NEW' },
  {
    name: 'Akademi paket satisi - Akademi Plus',
    amount: 900,
    stage: 'PROPOSAL',
  },
  {
    name: 'ReferansAI power partner eslesmesi - Denge Finans',
    amount: 500,
    stage: 'MEETING',
  },
  {
    name: 'Supheli profil incelemesi - Nehir IK',
    amount: 0,
    stage: 'SCREENING',
  },
  {
    name: 'Hedefli ilan kurumsal talebi - Eksen Mimarlik',
    amount: 650,
    stage: 'NEW',
  },
  {
    name: 'TEAM Bogazici chapter uyelik degerlendirmesi',
    amount: 2500,
    stage: 'MEETING',
  },
  { name: 'TEAM Ege ziyaretci odeme takibi', amount: 75, stage: 'PROPOSAL' },
  {
    name: 'Gold yenileme - Denge Finansal Planlama',
    amount: 500,
    stage: 'CUSTOMER',
  },
  {
    name: 'Silver yenileme - Mavi Bulut Yazilim',
    amount: 300,
    stage: 'SCREENING',
  },
  {
    name: 'Kapali is dogrulama - Atlas Lojistik',
    amount: 92000,
    stage: 'CUSTOMER',
  },
  {
    name: 'Kurumsal ortak satis talebi - Kuzey Mali',
    amount: 1400,
    stage: 'PROPOSAL',
  },
  {
    name: 'Basic kullanici aktivasyon takibi - Startup lead',
    amount: 0,
    stage: 'NEW',
  },
  {
    name: 'TEAM sektor tekeli kontrolu - Eksen Mimarlik',
    amount: 2500,
    stage: 'SCREENING',
  },
];

const GENERATE_OPPORTUNITY_SEEDS = (): OpportunityDataSeed[] => {
  const OPPORTUNITY_SEEDS: OpportunityDataSeed[] = [];

  for (let INDEX = 1; INDEX <= 50; INDEX++) {
    const TEMPLATE_INDEX = (INDEX - 1) % OPPORTUNITY_TEMPLATES.length;
    const TEMPLATE = OPPORTUNITY_TEMPLATES[TEMPLATE_INDEX];

    const DAYS_AHEAD = Math.floor(Math.random() * 90) + 1;
    const CLOSE_DATE = new Date();

    CLOSE_DATE.setDate(CLOSE_DATE.getDate() + DAYS_AHEAD);

    const workspaceMemberId = Object.values(WORKSPACE_MEMBER_DATA_SEED_IDS)[
      INDEX % 4
    ];
    const workspaceMember = WORKSPACE_MEMBER_DATA_SEEDS.find(
      (workspaceMember) => workspaceMember.id === workspaceMemberId,
    );
    const workspaceMemberName = isDefined(workspaceMember)
      ? `${workspaceMember?.nameFirstName} ${workspaceMember?.nameLastName}`
      : 'Unkonwn';

    const rawSeed: OpportunityDataSeed = {
      id: OPPORTUNITY_DATA_SEED_IDS[`ID_${INDEX}`],
      name: TEMPLATE.name,
      amountAmountMicros: TEMPLATE.amount * 1000000,
      amountCurrencyCode: 'TRY',
      closeDate: CLOSE_DATE,
      stage: TEMPLATE.stage,
      position: INDEX,
      pointOfContactId:
        PERSON_DATA_SEED_IDS[
          `ID_${INDEX}` as keyof typeof PERSON_DATA_SEED_IDS
        ] || PERSON_DATA_SEED_IDS.ID_1,
      companyId:
        COMPANY_DATA_SEED_IDS[
          `ID_${Math.ceil(INDEX / 2)}` as keyof typeof COMPANY_DATA_SEED_IDS
        ] || COMPANY_DATA_SEED_IDS.ID_1,
      ownerId: WORKSPACE_MEMBER_DATA_SEED_IDS.TIM,
      createdBySource: 'MANUAL',
      updatedBySource: 'MANUAL',
      createdByWorkspaceMemberId: workspaceMemberId,
      createdByName: workspaceMemberName,
      updatedByWorkspaceMemberId: workspaceMemberId,
      updatedByName: workspaceMemberName,
    };

    const opportunityDataSeedWithSQLColumnOrder: OpportunityDataSeed =
      Object.fromEntries(
        OPPORTUNITY_DATA_SEED_COLUMNS.map((column) => [
          column,
          rawSeed[column as keyof OpportunityDataSeed],
        ]),
      ) as OpportunityDataSeed;

    OPPORTUNITY_SEEDS.push(opportunityDataSeedWithSQLColumnOrder);
  }

  return OPPORTUNITY_SEEDS;
};

export const OPPORTUNITY_DATA_SEEDS = GENERATE_OPPORTUNITY_SEEDS();
