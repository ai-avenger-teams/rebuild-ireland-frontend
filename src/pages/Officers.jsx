import { Helmet } from 'react-helmet-async';
import OfficerCard from '../components/OfficerCard';

const officers = [
    {
        name: 'Brigid Deenihan',
        county: 'Carlow County Council',
        email: 'bdeenihan@carlowcoco.ie',
        phone: '059 9136285',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Sinead Smith',
        county: 'Cavan County Council',
        email: 'ssmith@cavancoco.ie',
        phone: '049 437 8300/60',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Clare Vacant homes',
        county: 'Clare County Council',
        email: 'vacanthomes@clarecoco.ie',
        phone: '065 6846221',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Niamh Sheehan',
        county: 'Cork City Council',
        email: 'niamh_sheehan@corkcity.ie',
        phone: '021 492 4032',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Ms Suzanne Cullinane',
        county: 'Cork County Council',
        email: 'vho@corkcoco.ie',
        phone: '0404 20100 (ext 2393)',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Mr Seamus DeFaoite',
        county: 'Cork County Council',
        email: 'vho@corkcoco.ie',
        phone: '',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Patricia McIntyre',
        county: 'Donegal County Council',
        email: 'pmcintyr@donegalcoco.ie',
        phone: '074 9153900',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Mr John Ryan',
        county: 'Dublin City Council',
        email: 'BuyandRenew@dublincity.ie',
        phone: '01 222 5367',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Gerry O’Quigley',
        county: 'Dún Laoghaire-Rathdown Council',
        email: 'vacanthomes@dlrcoco.ie',
        phone: '01 2054700',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Michelle Rogers',
        county: 'Fingal County Council',
        email: 'Vacant.homes@fingal.ie',
        phone: '01 8905000',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Claire Ni Fhlaithearta',
        county: 'Galway City Council',
        email: 'vacanthomes@galwaycity.ie',
        phone: '091 536400',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Michelle Connellan',
        county: 'Galway County Council',
        email: 'mconnellan@galwaycoco.ie',
        phone: '091 509300',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Niamh Fannon',
        county: 'Kerry County Council',
        email: 'vacanthomes@kerrycoco.ie',
        phone: '066 7183500',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Olive Howe',
        county: 'Kildare County Council',
        email: 'vacanthomes@kildarecoco.ie',
        phone: '045 980954',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Trevor Byrne',
        county: 'Kilkenny County Council',
        email: 'vacanthomes@kilkennycoco.ie',
        phone: '056 779 4000',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Mr Gerry Ryan',
        county: 'Laois County Council',
        email: 'gryan@laoiscoco.ie',
        phone: '057 867 4331',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Shane Mulvey',
        county: 'Leitrim County Council',
        email: 'vacanthomes@leitrimcoco.ie',
        phone: '071 9620005 Ext 223',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'David O’Grady',
        county: 'Limerick City and County Council',
        email: 'david.ogrady@limerick.ie',
        phone: '061 556552',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Mariana Alexandrino',
        county: 'Longford County Council',
        email: 'vacanthomesofficer@longfordcoco.ie',
        phone: '043 334 3499',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Cormac McGee',
        county: 'Louth County Council',
        email: 'vho@louthcoco.ie',
        phone: '042 9324373',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Deirdre Swords',
        county: 'Mayo County Council',
        email: 'dswords@mayococo.ie',
        phone: '094 9064951',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Kerrie Duffy',
        county: 'Meath County Council',
        email: 'vacanthomes@meathcoco.ie',
        phone: '046 909 7000',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'John Reilly',
        county: 'Monaghan County Council',
        email: '',
        phone: '047 30500',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Regina Egan',
        county: 'Offaly County Council',
        email: 'regan@offalycoco.ie',
        phone: '057 9346800',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Mark Finneran',
        county: 'Roscommon County Council',
        email: 'vacanthomesoffice@roscommoncoco.ie',
        phone: '090 66 37113',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Adrian Grandison',
        county: 'Sligo County Council',
        email: 'vacanthomes@sligococo.ie',
        phone: '071 9114460/ 071 9114443',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Hazel Doran',
        county: 'South Dublin County Council',
        email: 'vhu@sdublincoco.ie',
        phone: '01 4149265',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Nevan Phelan',
        county: 'Tipperary County Council',
        email: 'vacanthomes@tipperarycoco.ie',
        phone: '0810 06 5000',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Mark Fitzpatrick',
        county: 'Westmeath County Council',
        email: 'Mark.Fitzpatrick@westmeathcoco.ie',
        phone: '044 933 2000',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Tom Fox',
        county: 'Wexford County Council',
        email: 'vacanthomes@wexfordcoco.ie',
        phone: '053 9196000',
        photo: 'https://via.placeholder.com/200x400',
    },
    {
        name: 'Susanne Hall',
        county: 'Wicklow County Council',
        email: 'shall@wicklowcoco.ie',
        phone: '0404 20100 (ext 2393)',
        photo: 'https://via.placeholder.com/200x400',
    },
];

function Officers() {
    return (
        <>
            <Helmet>
                <title>Vacant Property Officers</title>
                <meta name="description" content="Connect with local Vacant Property Officers across Ireland through ReBuild Ireland. Find contact information for officers in your county who can assist with property renovation, grants, and compliance." />
                <meta name="keywords" content="Vacant Property Officers Ireland, ReBuild Ireland, property renovation support, local property officers, Ireland property contacts, property compliance Ireland, renovation grants, derelict property assistance, county property officers, property management Ireland" />
            </Helmet>
            <div className="mx-auto py-3">
                <h1 className="text-customGreen font-semibold text-3xl py-3">Vacant Property Officers</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-3">
                    {officers.map((officer, index) => (
                        <OfficerCard key={index} officer={officer} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Officers;
