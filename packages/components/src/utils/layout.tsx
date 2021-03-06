// @ts-nocheck

import { CodeOutlined, CopyOutlined, EyeOutlined, FullscreenOutlined } from '@ant-design/icons';
import { useDebounceFn } from 'ahooks';
import type { ColProps } from 'antd';
import { Button, Card, Col, Empty, Input, message, Modal, Row, Space } from 'antd';
import type { RowProps } from 'antd/lib/grid/row';
import Text from 'antd/lib/typography/Text';
import Title from 'antd/lib/typography/Title';
import { Button as TwButton, RcProvider, _isEmpty, _lowerCase } from 'components-next';
import type { ReactNode } from 'react';
import React, { useState } from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import '../assets/styles.css';
// import '../tailwind.css';

export type IDemoLayout = {
  data?: {
    title: string;
    component: ReactNode;
    isFullView?: boolean;
    /**
     * antd col 1-24
     */
    span?: '12' | '24';
  }[];
  span?: number;
  children?: ReactNode;
  gutter?: RowProps['gutter'];
  colProps?: ColProps;
  isSmallSpan?: boolean;
};

export const DemoLayout = (props: IDemoLayout) => {
  const cols = { xxl: 8, xl: 12, lg: 12, md: 12, sm: 12, xs: 24 };

  // const renderSpan = props.isSmallSpan ? sm : sm;

  const {
    data,
    children,
    colProps = {
      ...props.colProps,
    },
    gutter = [20, 20],
  } = props;
  const [title, setTitle] = useState('');
  const [dark, setDark] = useState<'dark' | 'light'>('light');
  const [view, setView] = useState<'preview' | 'code' | 'fullCode'>('preview');
  const [itemData, setItemData] = useState(data);

  const ToggleDark = () => {
    setDark(dark === 'dark' ? 'light' : 'dark');
    if (dark === 'dark') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  const { run: onSearch } = useDebounceFn(
    (v: string) => {
      const filterVal = data?.filter((i) => _lowerCase(i.title).includes(v.toLowerCase()));
      setItemData(v ? filterVal : data);
    },
    { wait: 100 },
  );

  return (
    <RcProvider>
      {!children && (
        <>
          <Space align="baseline">
            <TwButton
              variant={dark === 'dark' ? 'outline' : 'primary'}
              color={dark === 'dark' ? 'light' : 'dark'}
              className="py-2"
              onClick={ToggleDark}
            >
              {dark ? 'Dark' : 'Light'}
            </TwButton>
            <Input
              onChange={(v) => onSearch(v.target?.value)}
              className="max-w-xs mb-6"
              placeholder="Search..."
              allowClear
            />
          </Space>

          <Row gutter={gutter} justify={_isEmpty(itemData) ? 'center' : 'start'}>
            {_isEmpty(itemData) && <Empty />}

            {itemData?.map?.((i, k) => {
              const code = reactElementToJSXString(i.component);

              const copyCode = (
                <Text
                  copyable={{
                    text: code,
                    onCopy: () => {
                      message.success('copies!');
                    },
                    icon: (
                      <CopyOutlined style={{ fontSize: 20, marginLeft: 4, color: '#1890ff' }} />
                    ),
                    tooltips: false,
                  }}
                >
                  Copy
                </Text>
              );

              return (
                <React.Fragment key={k}>
                  <Modal
                    destroyOnClose
                    onCancel={() => setTitle('')}
                    style={{ minWidth: '70vw', borderRadius: 4 }}
                    bodyStyle={{ minHeight: '60vh' }}
                    visible={i.title === title}
                    footer={false}
                    title={
                      <Row justify="space-between" align="middle">
                        <Space>
                          <Button
                            type={view === 'preview' ? 'primary' : 'default'}
                            onClick={() => setView('preview')}
                          >
                            <EyeOutlined style={{ fontSize: 22 }} />
                            <Text>Preview</Text>
                          </Button>
                          <Button
                            type={view === 'code' ? 'primary' : 'default'}
                            onClick={() => setView('code')}
                          >
                            <CodeOutlined style={{ fontSize: 20 }} />

                            <Text>Sort Code</Text>
                          </Button>
                          <Button
                            type={view === 'fullCode' ? 'primary' : 'default'}
                            onClick={() => setView('fullCode')}
                          >
                            <CodeOutlined style={{ fontSize: 20 }} />
                            <Text>Full Code</Text>
                          </Button>
                        </Space>
                        <div style={{ marginRight: 30 }}>{copyCode}</div>
                      </Row>
                    }
                  >
                    <Card style={{ display: 'flex', justifyContent: 'center' }}>
                      {view === 'preview' ? (
                        i.component
                      ) : (
                        <>
                          <SyntaxHighlighter
                            language="javascript"
                            style={docco}
                            customStyle={{ minHeight: 300 }}
                          >
                            {code}
                          </SyntaxHighlighter>
                        </>
                      )}
                    </Card>
                  </Modal>

                  <Col
                    {...{
                      ...cols,
                      ...colProps,
                      ...(i.span === '12' ? { ...cols, xxl: 12, xl: 24 } : {}),
                      ...(i.span === '24' ? { ...cols, xxl: 24, xl: 24 } : {}),
                    }}
                  >
                    <Card
                      bordered
                      title={<Title className="mr-3 text-lg mb-0 ">{i.title}</Title>}
                      extra={
                        <Space align="center">
                          <FullscreenOutlined
                            style={{ fontSize: 20, marginRight: 12, color: '#1890ff' }}
                            onClick={() => setTitle(i.title)}
                          />
                          {copyCode}
                        </Space>
                      }
                    >
                      {i?.component}
                    </Card>
                  </Col>
                </React.Fragment>
              );
            })}
          </Row>
        </>
      )}
      <div className="py-3">{children} </div>
    </RcProvider>
  );
};
