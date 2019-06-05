import React, { ComponentType, createRef } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TimePickerOptionGroup } from './TimePickerOptionGroup';
import { TimeRange } from '../../types/time';
import { withRighAlignedStory } from '../../utils/storybook/withRightAlignedStory';
import { dateTime } from '../../utils/moment_wrapper';

const TimePickerOptionGroupStories = storiesOf('UI/TimePicker/TimePickerOptionGroup', module);

TimePickerOptionGroupStories.addDecorator(withRighAlignedStory);

const data = {
  isPopoverOpen: false,
  onPopoverOpen: () => {
    action('onPopoverOpen fired')();
  },
  onPopoverClose: (timeRange: TimeRange) => {
    action('onPopoverClose fired')(timeRange);
  },
  popoverProps: {
    value: { from: dateTime(), to: dateTime(), raw: { from: 'now/d', to: 'now/d' } },
    isTimezoneUtc: false,
    onChange: (timeRange: TimeRange) => {
      action('onChange fired')(timeRange);
    },
  },
};

const pickerTriggerRef = createRef<HTMLDivElement>();
const TimePickerOptionGroupComponent = TimePickerOptionGroup({ pickerTriggerRef: pickerTriggerRef });

TimePickerOptionGroupStories.add('default', () => (
  <TimePickerOptionGroupComponent
    clearValue={() => {}}
    className={''}
    cx={() => {}}
    getStyles={(name, props) => ({})}
    getValue={() => {}}
    hasValue
    isMulti={false}
    options={[]}
    selectOption={() => {}}
    selectProps={''}
    setValue={(value, action) => {}}
    label={'Custom'}
    children={null}
    Heading={(null as any) as ComponentType<any>}
    data={data}
  />
));
