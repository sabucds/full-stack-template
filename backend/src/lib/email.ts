/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as postmark from 'postmark';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import { IUser } from '../components/user';

dayjs.locale('es');

interface BrowserDetectInfo {
  name?: string;
  version?: string;
  versionNumber?: number;
  mobile?: boolean;
  os?: string;
}

const fromEmail = process.env.SENDER_EMAIL;

// const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY);

export async function sendWelcomeEmail(user: IUser) {
  const emailOptions = {
    From: `Plataforma Unidos <${fromEmail}>`,
    To: `${user?.email}`,
    TemplateAlias: 'welcome',
    TemplateModel: {},
  };
  // return client.sendEmailWithTemplate(emailOptions);
}

interface ResetPasswordOptions {
  user: IUser;
  os: BrowserDetectInfo;
  url: string;
}

export async function sendResetPasswordEmail({
  user,
  os,
  url,
}: ResetPasswordOptions) {
  console.log(url);
  const emailOptions = {
    From: `Plataforma Unidos <${fromEmail}>`,
    To: `${user?.email}`,
    TemplateAlias: 'password-reset',
    TemplateModel: {},
  };
  // return client.sendEmailWithTemplate(emailOptions);
}
